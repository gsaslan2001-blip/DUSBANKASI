import os
from pinecone import Pinecone

api_key = os.environ.get("PINECONE_API_KEY", "")
pc = Pinecone(api_key=api_key)
index = pc.Index('dusbankasi')

try:
    res = index.query(vector=[0.0]*1536, top_k=1, include_metadata=True)
    print("Success!")
    print(res)
except Exception as e:
    print(f"Error: {e}")
