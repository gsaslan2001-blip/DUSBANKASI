import sys
import os
import asyncio
import aiohttp

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "lib")))
from db_layer import fetch_all_questions

async def main():
    async with aiohttp.ClientSession() as s:
        qs = await fetch_all_questions('Histoloji', s)
        units = set(q.get('unit') for q in qs if q.get('unit'))
        print(f"Total units for Histoloji: {len(units)}")
        print("Units:", sorted(list(units)))

if __name__ == "__main__":
    asyncio.run(main())
