# -*- coding: utf-8 -*-
import os
import re

file_path = r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\Çıktı\04- GRAM NEGATİF BAKTERİLER.txt"

with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

questions = []
# split by Soru X:
parts = re.split(r'\nSoru \d+:', '\n' + text)
for part in parts[1:]:
    # extract question, A, B, C, D, E, Cevap, Açıklama
    q = {}
    lines = part.strip().split('\n')
    q_text = []
    idx = 0
    while idx < len(lines) and not re.match(r'^[A-E]\)', lines[idx].strip()):
        q_text.append(lines[idx])
        idx += 1
    q['question'] = ' '.join(q_text).strip()
    
    options = {}
    while idx < len(lines) and re.match(r'^[A-E]\)', lines[idx].strip()):
        opt_match = re.match(r'^([A-E])\)\s*(.*)', lines[idx].strip())
        if opt_match:
            options[opt_match.group(1)] = opt_match.group(2)
        idx += 1
    
    answer_match = None
    explanation = []
    while idx < len(lines):
        if lines[idx].startswith('Cevap:'):
            answer_match = re.search(r'Cevap:\s*([A-E])', lines[idx])
        elif lines[idx].startswith('Açıklama:'):
            explanation.append(lines[idx].replace('Açıklama:', '').strip())
        elif explanation:
            explanation.append(lines[idx].strip())
        idx += 1
        
    if answer_match:
        q['correct_answer'] = answer_match.group(1)
        q['options'] = options
        q['explanation'] = ' '.join(explanation).strip()
        questions.append(q)

print(f"Parsed {len(questions)} questions")