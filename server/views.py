from flask import render_template
from server import app


def main(_=None):
    return render_template('/main.html', debug=True)
