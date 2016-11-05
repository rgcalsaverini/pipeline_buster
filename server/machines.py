from server.instructions import basic, opcodes
from random import randint


machines = {
    0: {
        'name': 'Basic Non-Pipelined',
        'status': 'desligado',
        'opcodes': opcodes,
        'code':{
            'limit': 20,
            'contents': [],
        },
        'stack': {
            'limit': 16,
            'contents': [],
        },
        'memory': {
            'limit': 256,
            'contents': [randint(-255, 255) for _ in range(256)],
        },
        'gprs': ['A', 'B', 'C'],
        'registers': {},
        'returnRegister': 'A',
        'cycle': 1000,
        'pipeline': [
            {
                'img': 'box',
                'text': 'Fetch',
                'operations': ['ins_fetch', 'decode', 'execute', 'mem', 'write'],
            },
            {
                'img': 'box',
                'text': 'Decode',
                'operations': [],
            },
            {
                'img': 'alu',
                'text': 'Exec',
                'operations': [],
            },
            {
                'img': 'box',
                'text': 'Mem',
                'operations': [],
            },
            {
                'img': 'box',
                'text': 'Write',
                'operations': [],
            },
        ],
        'halt': False,
    }
}
