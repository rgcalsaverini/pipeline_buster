from server import app, routes


def run(debug, port):
    routes.add_routes()
    app.run("0.0.0.0", port=port, debug=debug)
