from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.secret_key = '-&Zr99iR3yX R~XHH!jmN]LWX/,?RT'
