from config import app


@app.errorhandler(404)
def page_not_found(e):
    return index()


@app.route('/')
def index():
    return "Hello, World!"


if __name__ == '__main__':
    app.run()
