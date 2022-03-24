import requests
import json


payload = {'username': 'bebechat', 'password': 'dedete', 'avatar': '""'}
# headers = {'Content-Type': 'application/x-www-form-urlencoded'}
r = requests.post("http://localhost:3000/join/", json=payload)


# payload = {'username': '"bebechat"', 'password': '"dedete"', 'avatar': '""'}
# r = requests.post("http://localhost:3000/join", params=payload)
print (r.url)
print(r.text)
print (payload)
print (r.json)