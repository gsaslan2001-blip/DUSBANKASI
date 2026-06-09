import sys, asyncio
sys.path.insert(0, r'C:\Users\FURKAN\Desktop\Projeler\notebooklm-py-main\src')
sys.path.insert(0, r'C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts')
from notebooklm import NotebookLMClient
from config import NOTEBOOK_ID

PDF = r"C:\Users\FURKAN\Desktop\DUS\Fizyoloji\Fizyo ünite pdf\1.ünite.pdf"

async def test():
    print("Bağlanıyor...", flush=True)
    async with await NotebookLMClient.from_storage() as client:
        print("Bağlantı OK", flush=True)
        print(f"PDF yükleniyor: {PDF}", flush=True)
        src = await asyncio.wait_for(
            client.sources.add_file(NOTEBOOK_ID, PDF, wait=True),
            timeout=300
        )
        print(f"Kaynak OK: {src.id}", flush=True)
        print("Siliniyor...", flush=True)
        await client.sources.delete(NOTEBOOK_ID, src.id)
        print("Temizlendi. BAŞARI.", flush=True)

asyncio.run(test())
