"""
OpenAI chat completions — async wrapper, exponential backoff retry.

OpenAI Python SDK senkrondur; asyncio.to_thread ile event loop'u bloke etmeden çağırılır.
429 (rate limit) ve geçici ağ hatalarında otomatik retry uygulanır.
"""
import asyncio
import logging
import os
import time
from pathlib import Path
from typing import Optional

from dotenv import load_dotenv

_ENV_PATH = Path(__file__).parent.parent.parent / ".env.local"
load_dotenv(_ENV_PATH, override=False)

logger = logging.getLogger(__name__)

try:
    from openai import OpenAI, RateLimitError, APIError
    _OPENAI_AVAILABLE = True
except ImportError:
    _OPENAI_AVAILABLE = False
    logger.warning("openai paketi yüklü değil — LLM üretimi devre dışı.")

_OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")

_oa = None
if _OPENAI_AVAILABLE and _OPENAI_API_KEY:
    _oa = OpenAI(api_key=_OPENAI_API_KEY)


def _sync_chat(
    system_prompt: str,
    user_prompt: str,
    model: str,
    temperature: float,
) -> str:
    """OpenAI sync çağrısı — asyncio.to_thread ile çağrılır."""
    if _oa is None:
        raise RuntimeError("OpenAI client başlatılamadı. OPENAI_API_KEY eksik.")

    response = _oa.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ],
        temperature=temperature,
    )
    return response.choices[0].message.content


async def generate_completion(
    system_prompt: str,
    user_prompt: str,
    model: str = "gpt-4o",
    temperature: float = 0.3,
    max_retries: int = 3,
    backoff_base: float = 1.0,
    rate_limit_wait: float = 60.0,
) -> Optional[str]:
    """
    Async OpenAI chat completion.

    Hata stratejisi:
      - RateLimitError (429): rate_limit_wait saniye bekle, sonra retry.
      - Diğer APIError / genel hata: exponential backoff (backoff_base * 2^attempt).
      - max_retries tükendikten sonra None döndürür; pipeline çökmez.
    """
    if not _OPENAI_AVAILABLE or _oa is None:
        return "OpenAI client kullanılamıyor."

    for attempt in range(max_retries):
        try:
            result = await asyncio.to_thread(
                _sync_chat, system_prompt, user_prompt, model, temperature
            )
            return result

        except Exception as e:
            is_rate_limit = _OPENAI_AVAILABLE and isinstance(e, RateLimitError)
            is_last = attempt == max_retries - 1

            if is_last:
                logger.error(f"OpenAI {max_retries}. denemede de başarısız: {e}")
                return None

            if is_rate_limit:
                wait = rate_limit_wait
                logger.warning(f"Rate limit (429) — {wait}s bekleniyor. (deneme {attempt+1}/{max_retries})")
            else:
                wait = backoff_base * (2 ** attempt)
                logger.warning(f"OpenAI hatası — {wait:.1f}s backoff. (deneme {attempt+1}/{max_retries}): {e}")

            await asyncio.sleep(wait)

    return None
