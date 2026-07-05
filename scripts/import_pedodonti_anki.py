import os
import json
import urllib.request

ANKI_CONNECT_URL = 'http://localhost:8765'
CLOZE_OUTPUT_DIR = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\cloze_output"
MODEL_NAME = "Cloze-MAXXİNG"

MAPPING = {
    "Pedodonti_DİŞLERİN_OLUŞUM_DÖNEMLERİ_MERGED": "001-Dişlerin Oluşum Dönemleri",
    "Pedodonti_DİŞ_SÜRME_EVRELERİ_MERGED": "002-Diş Sürme Evreleri",
    "Pedodonti_DİŞLERİN_GELİŞİM_ANOMALİLERİ_MERGED": "003-Dişlerin Gelişim Anomalileri",
    "Pedodonti_SÜT_DENTİSYONDA_ÇÜRÜK_MERGED": "004-Süt Dentisyonda Çürük",
    "Pedodonti_5_Ünite_MERGED": "005-5. Ünite",
    "Pedodonti_SÜT_DİŞİ_PULPA_HASTALIKLARININ_TEDAVİSİNDEKİ_AMAÇ_MERGED": "006-Süt Dişi Pulpa Hastalıklarının Tedavisindeki Amaç",
    "Pedodonti_7_Ünite_MERGED": "007-7. Ünite",
    "Pedodonti_8_Ünite_MERGED": "008-8. Ünite",
    "Pedodonti_9_Ünite_MERGED": "009-9. Ünite",
    "Pedodonti_10_Ünite_MERGED": "010-10. Ünite",
    "Pedodonti_ÇÜRÜK_PROFİLAKSİSİNDE_FLORİDLER_MERGED": "011-Çürük Profilaksisinde Floridler",
    "Pedodonti_12_Ünite_MERGED": "012-12. Ünite",
    "Pedodonti_13_Ünite_MERGED": "013-13. Ünite",
    "Pedodonti_DİŞ_YARALANMALARININ_ETİYOLOJİSİ_GÖRÜLME_SIKLIĞI_VE_DAĞILIMI_MERGED": "014-Diş Yaralanmalarının Etiyolojisi Görülme Sıklığı Ve Dağılımı",
    "Pedodonti_ÇOCUKLARDA_PERİODONSİYUMUN_ÖZELLİKLERİ_MERGED": "015-Çocuklarda Periodonsiyumun Özellikleri",
    "Pedodonti_16_Ünite_MERGED": "016-16. Ünite",
    "Pedodonti_KONJENİTAL_KALP_HASTALIKLARI_MERGED": "017-Konjenital Kalp Hastalıkları",
    "Pedodonti_ANTİBİYOTİKLER_MERGED": "018-Antibiyotikler",
    "Pedodonti_19_Ünite_MERGED": "019-19. Ünite",
    "Pedodonti_ENGELLİ_ÇOCUKLARDA_SINIFLAMALAR_MERGED": "020-Engelli Çocuklarda Sınıflamalar",
    "Pedodonti_21_Ünite_MERGED": "021-21. Ünite",
    "Pedodonti_22_Ünite_MERGED": "022-22. Ünite",
    "Pedodonti_23_Ünite_MERGED": "023-23. Ünite",
    "Pedodonti_24_Ünite_MERGED": "024-24. Ünite",
    "Pedodonti_1_MİNE_MERGED": "025-1. Mine",
    "Pedodonti_BLACK_PRENSİPLERİ_MERGED": "026-Black Prensipleri",
    "Pedodonti_ÇOCUK_DİŞ_HEKİMLİĞİNDE_KULLANILAN_RESTORATİF_MATERYALLER_MERGED": "027-Çocuk Diş Hekimliğinde Kullanılan Restoratif Materyaller",
    "Pedodonti_28_Ünite_MERGED": "028-28. Ünite",
    "Pedodonti_SÜT_DİŞLERİ_ÇEKİM_ENDİKASYONLARI_ve_KONTRENDİKASYONLARI_MERGED": "029-Süt Dişleri Çekim Endikasyonları ve Kontrendikasyonları"
}

def anki_request(action, **params):
    payload = {'action': action, 'params': params, 'version': 6}
    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(ANKI_CONNECT_URL, data)
    response = urllib.request.urlopen(req)
    response_data = json.loads(response.read())
    if len(response_data) != 2:
        raise Exception('Response has an unexpected number of fields')
    if 'error' not in response_data:
        raise Exception('Response is missing required error field')
    if 'result' not in response_data:
        raise Exception('Response is missing required result field')
    if response_data['error'] is not None:
        raise Exception(response_data['error'])
    return response_data['result']

def get_base_filename(filename):
    # Returns the base identifier by stripping the timestamp part
    # Pedodonti_10_Ünite_MERGED_20260619_122701.tsv -> Pedodonti_10_Ünite_MERGED
    parts = filename.split('_MERGED_')
    if len(parts) == 2:
        return parts[0] + "_MERGED"
    return None

def main():
    total_added = 0
    total_files = 0
    
    # Tüm dosyaları al
    files = [f for f in os.listdir(CLOZE_OUTPUT_DIR) if f.startswith('Pedodonti_') and '_MERGED_' in f and f.endswith('.tsv')]
    
    # Önce tüm ilgili desteleri sil (kartlarıyla birlikte) temiz bir başlangıç için
    decks_to_delete = [f"DUS::Pedodonti::{name}" for name in MAPPING.values()]
    try:
        print("Mevcut desteler ve içindeki kartlar siliniyor...")
        anki_request('deleteDecks', decks=decks_to_delete, cardsToo=True)
    except Exception as e:
        print(f"Deste silme işlemi sırasında bir hata oldu (belki bazıları zaten yoktu): {e}")

    for filename in sorted(files):
        base_name = get_base_filename(filename)
        if not base_name or base_name not in MAPPING:
            print(f"Skipping unknown file: {filename}")
            continue
            
        deck_name = f"DUS::Pedodonti::{MAPPING[base_name]}"
        print(f"Creating deck: {deck_name}")
        anki_request('createDeck', deck=deck_name)
        
        filepath = os.path.join(CLOZE_OUTPUT_DIR, filename)
        notes = []
        with open(filepath, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith('#'):
                    continue
                parts = line.split('\t')
                if len(parts) >= 3:
                    text, title, extra = parts[0], parts[1], parts[2]
                elif len(parts) == 2:
                    text, title, extra = parts[0], parts[1], ""
                else:
                    text, title, extra = parts[0], "", ""
                
                note = {
                    "deckName": deck_name,
                    "modelName": MODEL_NAME,
                    "fields": {
                        "Text": text,
                        "Başlık": title,
                        "Terimler": extra,
                        "Extra": ""
                    },
                    "options": {
                        "allowDuplicate": True,
                        "duplicateScope": "deck"
                    },
                    "tags": [
                        "pedodonti"
                    ]
                }
                notes.append(note)
        
        if notes:
            print(f"Adding {len(notes)} notes from {filename}...")
            try:
                results = anki_request('addNotes', notes=notes)
                added = sum(1 for r in results if r is not None)
                total_added += added
                total_files += 1
                print(f"Added {added} notes.")
            except Exception as e:
                print(f"Failed again: {e}")

    print(f"\nSuccessfully processed {total_files} files and added {total_added} notes to Anki.")

if __name__ == "__main__":
    main()
