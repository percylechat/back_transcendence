import telnetlib

host = "localhost"
port = 3000
timeout = 100

# classic post upload
raw = """POST /join HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Content-Lenght: 22 \r\n\r
{"username": "Percy", "password": "hellochat", avatar: ""}
"""

raw_byte = str.encode(raw)
with telnetlib.Telnet(host, port, timeout) as session:
    session.write(raw_byte)
    output = session.read_until(b"done", timeout)
    session.close()
    print(output)
    print("Done")