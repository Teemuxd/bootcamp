from flask import Flask

app = Flask(__name__)


@app.route('/')
def index():
    return 'Hello therdasdsdsddsdddddde'


@app.route(/'testä')
def test():
    return 'hello ageen'


if __name__ == '__main__':
    app.run()
