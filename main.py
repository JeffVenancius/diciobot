import json
with open('./numbers.json', 'r') as file:
    data = json.load(file)
    for i in data:
        if data.count(i) > 1:
            print(i)
