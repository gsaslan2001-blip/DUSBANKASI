"""
DUS Bankası — Patoloji Çıkmış Soruları Kanonik Ünite Eşleme Modülü
"""
import sys
import os
import re

CANONICAL_PATOLOJI_UNITS = [
    "1- HÜCRESEL ADAPTASYONLAR HÜCRE HASARI ve ÖLÜMÜ",
    "2- HEMODİNAMİK HASTALIKLAR ve ŞOK",
    "3- İNFLAMASYON ve TAMİR",
    "4- İMMÜN SİSTEM HASTALIKLARI",
    "5- NEOPLAZİ",
    "6- DAMAR HASTALIKLARI",
    "7- DERİ HASTALIKLARI",
    "8- Kemik, Eklem Hastalıkları ve Yumuşak Doku Tümörleri",
    "Oral Patoloji"
]

def get_canonical_unit(q):
    src = q.get("source_file", "")
    n = q.get("q_num", 0)
    text = (q["question"] + " " + " ".join(q["options"].values()) + " " + q["explanation"]).lower()
    stem = q["question"].lower()

    # --- 1. Oral Patoloji Öncelikli Kontrolü ---
    # Odontojenik kistler, odontojenik tümörler, tükürük bezi tümörleri, oral premalign/malign lezyonlar
    oral_keywords = [
        "odontojenik", "ameloblastom", "ameloblast", "odontom", "sementoblastom", 
        "dentigeröz", "radiküler kist", "parotis", "tükürük bezi", "sialadenit", "wartin", "warthin",
        "pleomorfik adenom", "mukoepidermoid", "adenoid kistik", "kuttner", "gorlin-goltz", 
        "cherubism", "keratokist", "scalloping", "mukosel", "ranula", "oral mukoza", "ağız mukozası",
        "dil mukozası", "oscc", "oral yassı", "lökoplaki", "eritroplaki", "gingival kist", 
        "lateral periodontal kist", "glandüler odontojenik", "calcifying odontogenic"
    ]
    
    # 01-dus_patoloji_sorular_101_200.md
    if src == "01-dus_patoloji_sorular_101_200.md":
        if 111 <= n <= 130 or 138 <= n <= 141 or 145 <= n <= 150:
            return "Oral Patoloji"
        if 131 <= n <= 134:
            return "7- DERİ HASTALIKLARI" # Pemfigus, liken planus
        if 135 <= n <= 137:
            return "4- İMMÜN SİSTEM HASTALIKLARI" # Sjögren, SLE, anafilaksi
        if 101 <= n <= 105:
            return "3- İNFLAMASYON ve TAMİR"
        if 106 <= n <= 110:
            return "1- HÜCRESEL ADAPTASYONLAR HÜCRE HASARI ve ÖLÜMÜ"
        if 142 <= n <= 144:
            return "5- NEOPLAZİ"

    # 02-dus_patoloji_sorular_1_100.md (Hücresel Adaptasyonlar, Hasar, Ölüm ve İnflamasyon)
    if src == "02-dus_patoloji_sorular_1_100.md":
        if any(k in stem for k in ["akut iltihap", "kronik iltihap", "granülom", "dev hücre", "fagositoz", "kemotaksis"]):
            return "3- İNFLAMASYON ve TAMİR"
        if any(k in stem for k in ["otoimmün", "immün", "aşırı duyarlılık", "antikor", "lökosit adezyon"]):
            return "4- İMMÜN SİSTEM HASTALIKLARI"
        if any(k in stem for k in ["tümör", "kanser", "karsinom", "onkojen"]):
            return "5- NEOPLAZİ"
        return "1- HÜCRESEL ADAPTASYONLAR HÜCRE HASARI ve ÖLÜMÜ"

    # 03-dus_patoloji_sorular_201_300.md (Hemodinamik, Şok, Neoplazi, Damar)
    if src == "03-dus_patoloji_sorular_201_300.md":
        if 201 <= n <= 235:
            if any(k in stem for k in ["vaskülit", "anevrizma", "ateroskleroz", "arter"]):
                return "6- DAMAR HASTALIKLARI"
            return "2- HEMODİNAMİK HASTALIKLAR ve ŞOK"
        if 236 <= n <= 285:
            return "5- NEOPLAZİ"
        if 286 <= n <= 300:
            if any(k in text for k in ["vaskülit", "panarterit", "wegener", "takayasu", "temporal arterit", "kawasaki"]):
                return "6- DAMAR HASTALIKLARI"
            return "5- NEOPLAZİ"

    # 04-dus_patoloji_sorular_301_315.md (İmmün Sistem Hastalıkları)
    if src == "04-dus_patoloji_sorular_301_315.md":
        if n in [313, 314, 315]:
            return "Oral Patoloji"
        if n in [308, 309, 310, 311]:
            return "3- İNFLAMASYON ve TAMİR"
        if n in [306, 307]:
            return "5- NEOPLAZİ"
        return "4- İMMÜN SİSTEM HASTALIKLARI"

    # dusbankasi_sorular-v2.md
    if src == "dusbankasi_sorular-v2.md":
        if 96 <= n <= 110:
            return "Oral Patoloji"
        if 66 <= n <= 95:
            # Kemik ve eklem tümörleri / yumuşak doku tümörleri
            if any(k in stem for k in ["çene", "mandibula", "maksilla", "parotis"]) and any(k in text for k in oral_keywords):
                return "Oral Patoloji"
            return "8- Kemik, Eklem Hastalıkları ve Yumuşak Doku Tümörleri"
        if 1 <= n <= 20 or 41 <= n <= 65:
            return "7- DERİ HASTALIKLARI"
        if 21 <= n <= 40:
            # Sistemik / inflamasyon / neoplazi
            if any(k in text for k in ["kolit", "gastrit", "hepatit", "ülser"]):
                return "3- İNFLAMASYON ve TAMİR"
            if any(k in text for k in ["karsinom", "tümör", "polip", "adenom"]):
                return "5- NEOPLAZİ"
            return "1- HÜCRESEL ADAPTASYONLAR HÜCRE HASARI ve ÖLÜMÜ"

    # Genel Fallback
    if any(k in text for k in oral_keywords):
        return "Oral Patoloji"
    if any(k in text for k in ["kemik", "eklem", "osteomiyelit", "osteosarkom", "sarkom", "kondrosarkom"]):
        return "8- Kemik, Eklem Hastalıkları ve Yumuşak Doku Tümörleri"
    if any(k in text for k in ["pemfigus", "liken planus", "deri", "epidermis", "melanom"]):
        return "7- DERİ HASTALIKLARI"
    if any(k in text for k in ["vaskülit", "ateroskleroz", "anevrizma"]):
        return "6- DAMAR HASTALIKLARI"
    if any(k in text for k in ["kanser", "karsinom", "neoplaz", "onkogen", "metastaz"]):
        return "5- NEOPLAZİ"
    if any(k in text for k in ["otoimmün", "immün", "alerji", "t lenfosit", "b lenfosit"]):
        return "4- İMMÜN SİSTEM HASTALIKLARI"
    if any(k in text for k in ["iltihap", "enflamasyon", "inflamasyon", "lökosit", "yara"]):
        return "3- İNFLAMASYON ve TAMİR"
    if any(k in text for k in ["şok", "ödem", "tromboz", "emboli", "kanama"]):
        return "2- HEMODİNAMİK HASTALIKLAR ve ŞOK"

    return "1- HÜCRESEL ADAPTASYONLAR HÜCRE HASARI ve ÖLÜMÜ"
