"""
Pinecone Integrated Search — async wrapper.

Pinecone Python SDK senkrondur; asyncio.to_thread ile event loop'u bloke etmeden çağırılır.
Global fallback: namespace boş döndüğünde namespace parametresi kaldırılarak tüm indeks aranır.
"""
import asyncio
import logging
import os
from pathlib import Path
from typing import List, Dict, Any

from dotenv import load_dotenv

_ENV_PATH = Path(__file__).parent.parent.parent / ".env.local"
load_dotenv(_ENV_PATH, override=False)

logger = logging.getLogger(__name__)

try:
    from pinecone import Pinecone as _PineconeSDK
    _PINECONE_AVAILABLE = True
except ImportError:
    _PINECONE_AVAILABLE = False
    logger.warning("pinecone paketi yüklü değil — RAG devre dışı.")

_PINECONE_API_KEY = os.environ.get("PINECONE_API_KEY")

# Modül yüklendiğinde bir kez client oluştur
_pc = None
if _PINECONE_AVAILABLE and _PINECONE_API_KEY:
    _pc = _PineconeSDK(api_key=_PINECONE_API_KEY)


def _get_index(host: str):
    if _pc is None:
        raise RuntimeError("Pinecone client başlatılamadı. PINECONE_API_KEY eksik.")
    return _pc.Index(host=host)


def _sync_search(index, query: str, namespace: str | None, top_k: int = 15) -> List[Dict]:
    """Pinecone sync search — asyncio.to_thread ile çağrılır."""
    kwargs = {
        "query": {"inputs": {"text": query}, "top_k": top_k},
        "rerank": {
            "model": "bge-reranker-v2-m3",
            "top_n": 5,
            "rank_fields": ["text"],
        },
        "fields": ["text"],
    }
    if namespace:
        kwargs["namespace"] = namespace

    res = index.search(**kwargs)
    return res.get("result", {}).get("hits", [])


async def search_namespace(index, lesson: str, query: str) -> List[Dict]:
    """Ders namespace'inde arama yap."""
    try:
        hits = await asyncio.to_thread(_sync_search, index, query, lesson.lower())
        return hits
    except Exception as e:
        logger.error(f"Pinecone namespace arama hatası ({lesson}): {e}")
        return []


async def search_global(index, query: str) -> List[Dict]:
    """Tüm indekste (namespace'siz) arama yap — gerçek fallback implementasyonu."""
    try:
        hits = await asyncio.to_thread(_sync_search, index, query, None)
        return hits
    except Exception as e:
        logger.error(f"Pinecone global arama hatası: {e}")
        return []


def _hits_to_context(hits: List[Dict]) -> str:
    """Hit listesini birleşik context metnine dönüştür."""
    texts = [
        hit["fields"]["text"]
        for hit in hits
        if "text" in hit.get("fields", {})
    ]
    return "\n\n---\n\n".join(texts)


async def get_rag_context(
    lesson: str,
    unit: str,
    question_text: str,
    host: str,
) -> str:
    """
    Ders namespace'inde arama yap; boş dönerse global fallback uygula.
    Her iki durumda da okunabilir context metni döndür.
    """
    if _pc is None:
        return "Kaynak veriye ulaşılamadı (Pinecone başlatılamadı)."

    try:
        index = _get_index(host)
    except RuntimeError as e:
        return str(e)

    query = f"{lesson} {unit} {question_text}"

    hits = await search_namespace(index, lesson, query)

    if not hits:
        logger.warning(f"Namespace '{lesson}' boş döndü — global arama başlatılıyor.")
        hits = await search_global(index, query)

    if not hits:
        logger.warning(f"Global arama da boş döndü: {lesson} / {unit}")
        return "İlgili kaynak bulunamadı."

    return _hits_to_context(hits)
