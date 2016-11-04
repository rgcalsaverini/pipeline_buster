from flask import render_template, abort
from server import app
from server.machines import machines
import json


def main(_=None):
    return render_template('/main.html', debug=True)

def machine(id):
    if id not in machines.keys():
        abort(404)
    return json.dumps(machines[id])
