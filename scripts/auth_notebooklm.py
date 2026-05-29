import urllib.request
import json

URL = "http://127.0.0.1:3000/mcp"

def post_req(payload, session_id=None):
    data = json.dumps(payload).encode('utf-8')
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/event-stream'
    }
    req = urllib.request.Request(URL, data=data, headers=headers)
    if session_id:
        req.add_header('Mcp-Session-Id', session_id)
    with urllib.request.urlopen(req, timeout=600) as response:
        sess = response.headers.get('Mcp-Session-Id')
        raw_content = response.read().decode()
        
        # Eğer yanıt text/event-stream formatındaysa (SSE), data satırını ayıkla
        content_type = response.headers.get('Content-Type', '')
        if 'text/event-stream' in content_type:
            json_body = {}
            for line in raw_content.splitlines():
                if line.startswith("data:"):
                    data_str = line[5:].strip()
                    if data_str:
                        try:
                            json_body = json.loads(data_str)
                            break
                        except Exception as parse_err:
                            pass
            return json_body, sess
        else:
            if not raw_content.strip():
                return {}, sess
            return json.loads(raw_content), sess

print("="*60)
print("[AUTH] NOTEBOOKLM MCP ONAY VE GIRIS (SETUP_AUTH)")
print("="*60)
print("\nNotebookLM MCP Sunucusuna baglaniliyor (localhost:3000)...")

try:
    resp1, sess_id = post_req({
        "jsonrpc": "2.0",
        "id": 1,
        "method": "initialize",
        "params": {
            "protocolVersion": "2024-11-05",
            "capabilities": {},
            "clientInfo": {"name": "auth-script", "version": "1.0"}
        }
    })
    
    post_req({"jsonrpc": "2.0", "method": "notifications/initialized"}, sess_id)
    
    print("\n[BILGI] Tarayici penceresi aciliyor. Lutfen Google hesabiniza giris yapin.")
    print("Giris yaptiktan sonra terminalde islem otomatik tamamlanacaktir (Max 10 dk bekler).\n")
    
    resp2, _ = post_req({
        "jsonrpc": "2.0",
        "id": 2,
        "method": "tools/call",
        "params": {
            "name": "setup_auth",
            "arguments": {"show_browser": True}
        }
    }, sess_id)
    
    # tool response'un içindeki text'i al
    try:
        content = resp2.get("result", {}).get("content", [])[0].get("text", "")
        print(f"\n[OK] Sonuc: {content}")
    except:
        print("\n[OK] Sonuc:", json.dumps(resp2, indent=2, ensure_ascii=False))
        
    print("\n[TAMAMLANDI] Giris islemi tamamlandi! Artik MCP sunucusu kalici profil ile arka planda calisabilir.")
except Exception as e:
    print(f"\n[HATA] Hata: {e}")
    print("Lutfen once 'scripts/start_notebooklm_mcp.bat' dosyasina cift tiklayarak sunucuyu baslattiginizdan emin olun!")
