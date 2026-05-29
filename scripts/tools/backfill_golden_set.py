import os
import sys
import json
import urllib.request
import urllib.parse
from openai import OpenAI

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from config import SUPABASE_URL, SUPABASE_KEY, OPENAI_API_KEY

def supabase_get(endpoint):
    url = f"{SUPABASE_URL}/rest/v1/{endpoint}"
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}"
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read())
    except Exception as e:
        print(f"Error fetching from {endpoint}: {e}")
        return []

def supabase_patch(q_id, payload):
    url = f"{SUPABASE_URL}/rest/v1/questions?id=eq.{q_id}"
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers=headers, method="PATCH")
    try:
        with urllib.request.urlopen(req) as resp:
            return resp.status
    except Exception as e:
        print(f"Error patching {q_id}: {e}")
        return None

def main():
    golden_set = [
        {"q1_id": "e43a7dda-4482-4c8e-bbc9-ea4df156fdc0", "q2_id": "c3468ca3-592c-4f1b-bb85-a373adaf4d56", "label": True},
        {"q1_id": "2b749972-cb7f-4e9b-af94-9967d423a406", "q2_id": "d7141612-9c7f-4d59-a0aa-d707e8550c43", "label": True},
        {"q1_id": "daf229b4-36d1-49bf-a8a5-fbb8a01c3618", "q2_id": "559c3052-4d93-494a-83ac-8ffa66111de5", "label": True},
        {"q1_id": "87513508-2085-4320-88b2-44117159bea7", "q2_id": "17efc9ec-4c4d-40e8-95d8-be2ea0124e68", "label": True},
        {"q1_id": "3dbc4933-06b3-40e9-bed2-8eac8c5dff1c", "q2_id": "a7e31791-0653-40de-bdd7-ebd9fbf6e11c", "label": True},
        {"q1_id": "fec29da5-7f5c-42af-a3ce-0f99df8187f0", "q2_id": "a6fa4b7f-683c-4d09-8f64-b4c4efd01053", "label": True},
        {"q1_id": "597e774b-a08f-4617-93fe-0fa364cc74c8", "q2_id": "23292f7f-08f4-4672-8837-3650054caa2d", "label": True},
        {"q1_id": "3fbf5622-02f5-4c94-9cd9-8f0b000b5374", "q2_id": "963a1237-6dbf-493b-9a4b-55a8f01e5a85", "label": True},
        {"q1_id": "1da1ad5a-5d81-491e-ab7b-1e33fd0723d8", "q2_id": "e3eafe44-4c5f-46a6-b4f5-85e00c1ccb3b", "label": True},
        {"q1_id": "08af972f-b261-4474-8873-d445fa94664f", "q2_id": "6e9c73c5-15f9-45c8-8d9a-ee1880074859", "label": True},
        {"q1_id": "a84467f0-04b2-4fd5-a911-fd4838d7fda3", "q2_id": "becdf780-09c6-48b8-97a7-81e65ded330c", "label": True},

        {"q1_id": "fcb77765-8f17-44a1-b8b7-77d2f50ddb9f", "q2_id": "b2925ca9-e678-4d91-80ed-f276cff21cc0", "label": False},
        {"q1_id": "6d550a06-3bb9-4d90-ab98-a20f4f9ed36d", "q2_id": "4a650784-c119-4b49-b652-e25945080d9b", "label": False},
        {"q1_id": "158ef85c-f370-4f21-958b-0dbdd3293183", "q2_id": "9e6206e0-586f-4681-ba54-ae175e30546a", "label": False},
        {"q1_id": "e206a327-e483-4a68-a917-ca8b640b9507", "q2_id": "8ff5b0d0-c1ff-4168-b538-b9c7a11011ef", "label": False},
        {"q1_id": "158ef85c-f370-4f21-958b-0dbdd3293183", "q2_id": "2b658630-a5fc-45b6-8b51-78c48fbb177e", "label": False},
        {"q1_id": "042de10d-84d8-4318-80ec-9afece038032", "q2_id": "26fc6fc6-a4a6-4648-adcf-2c1432da8caf", "label": False},
        {"q1_id": "9be278f1-3e91-45c8-a290-fa361d6ed9f3", "q2_id": "a6ef3d90-6460-44b3-965d-b570290fda6c", "label": False},
        {"q1_id": "540ff68e-5b68-4870-bdbf-bf3c0aaa69be", "q2_id": "55faee88-0d0e-4b69-993d-ba1ec08d29c7", "label": False},
        {"q1_id": "2b658630-a5fc-45b6-8b51-78c48fbb177e", "q2_id": "042de10d-84d8-4318-80ec-9afece038032", "label": False},
        {"q1_id": "c79b4d4e-dcbc-4d63-8c00-6b4861383284", "q2_id": "bf550878-d8d6-4a45-bcea-0a7cfb91376c", "label": False}
    ]

    unique_ids = set()
    for pair in golden_set:
        unique_ids.add(pair["q1_id"])
        unique_ids.add(pair["q2_id"])

    print(f"Golden Set unique question count: {len(unique_ids)}")

    client = OpenAI(api_key=OPENAI_API_KEY)
    
    for i, q_id in enumerate(unique_ids, 1):
        print(f"[{i}/{len(unique_ids)}] Processing: {q_id}")
        res = supabase_get(f"questions?select=id,question,explanation&id=eq.{q_id}")
        if not res:
            print(f"  Question not found in DB!")
            continue
        
        q = res[0]
        question_text = q.get("question", "") or " "
        explanation_text = q.get("explanation", "") or " "
        semantic_text = f"{question_text} {explanation_text}"

        # Generate embeddings
        try:
            # 1. full embedding
            emb_resp = client.embeddings.create(
                model="text-embedding-3-large",
                input=[semantic_text],
                dimensions=1536
            )
            emb = emb_resp.data[0].embedding

            # 2. stem embedding
            stem_resp = client.embeddings.create(
                model="text-embedding-3-large",
                input=[question_text],
                dimensions=1536
            )
            stem_emb = stem_resp.data[0].embedding

            # 3. explanation embedding
            expl_resp = client.embeddings.create(
                model="text-embedding-3-large",
                input=[explanation_text],
                dimensions=1536
            )
            expl_emb = expl_resp.data[0].embedding

            # Patch to DB
            payload = {
                "embedding": emb,
                "stem_embedding": stem_emb,
                "explanation_embedding": expl_emb
            }
            status = supabase_patch(q_id, payload)
            print(f"  Embeddings patched successfully. HTTP Status: {status}")

        except Exception as e:
            print(f"  Error generating/patching embeddings: {e}")

if __name__ == "__main__":
    main()
