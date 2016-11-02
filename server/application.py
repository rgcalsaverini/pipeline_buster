from server import app


def run(debug, port):
    app.run("0.0.0.0", port=port, debug=debug)
