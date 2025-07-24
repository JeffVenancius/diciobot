from bs4 import BeautifulSoup
import requests as req
import json


links = []

with open('a', 'r') as html:
    S = BeautifulSoup(html.read(), 'lxml')
    lists = S.findAll(class_='words-list--links')
    for i in lists:
        for link in i:
            if link.get("href"):
                links.append(link.get("href"))
with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(links, f, ensure_ascii=False, indent=4)


