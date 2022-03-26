import requests

# REQUEST Join
# payload = {'username': 'bebechat', 'password': 'dedete', 'avatar': '""'}
# r = requests.post("http://localhost:3000/join/", json=payload)
# print (r.url)
# print(r.text)
# print (payload)

# REQUEST login
payload = {'username': 'bechat', 'password': 'dedete'}
r = requests.post("http://localhost:3000/login/", json=payload)
print (r.url)
print(r.text)
print (payload)