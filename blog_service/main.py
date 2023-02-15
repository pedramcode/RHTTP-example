from rhttp_python import RHTTPServer
import json

server = RHTTPServer("127.0.0.1", 6379)

@server.route("/blog/post/list", "GET")
def home(req, res):
    data = json.dumps({
        "data": [
            {
                "title": "This is a test",
                "body": "Hello World This is my first Post!"
            },
        ]
    })
    return res.status(200).content_type("application/json").send(data)


if __name__ == "__main__":
    server.listen()