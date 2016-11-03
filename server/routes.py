from server import views, app

routes = [
    ('/',                   views.main,           ['GET']),
]

def add_routes():
    for route in routes:
        route_name = route[1].__name__
        app.add_url_rule(route[0], route_name, view_func=route[1], methods=route[2])
