from flask import render_template, abort
from server import app
from server.machines import machines
import json


def play(machine):
    return render_template('/play.html', machine=machine, debug=True)

def machine(id):
    if id not in machines.keys():
        abort(404)
    return json.dumps(machines[id])
