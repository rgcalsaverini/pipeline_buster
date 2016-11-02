"""PBust

Usage:
    pbust.py [--dev] [--port=<host>]
    pbust.py --help

Options:
    -D --dev                   Run the server for development
    -p, --port=<user>          Set the port[default:1337]
    -h --help                  Show this screen.
"""

from docopt import docopt
from tago.server import application

arguments = docopt(__doc__)

application.run(
    debug=arguments['--dev'],
    port=arguments['--port']
)
