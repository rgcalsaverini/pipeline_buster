from server import instructions
from random import randint


machines = {
    0: {
        'infoTitle': 'O Stack',
        'name': '1 - Stacker',
        'status': 'desligado',
        'opcodes': instructions.barebones,
        'code':{
            'limit': 5,
            'contents': [],
        },
        'stack': {
            'limit': 4,
            'contents': [],
        },
        'memory': {
            'limit': 0,
            'contents': [randint(-255, 255) for _ in range(0)],
        },
        'gprs': ['A'],
        'registers': {},
        'returnRegister': 'A',
        'cycle': 1000,
        'pipeline': [
            {
                'img': 'input',
                'name': 'Fetch',
                'operations': ['ins_fetch', 'decode', 'execute', 'mem', 'write'],
            },
            {
                'img': 'alu',
                'name': 'Exec',
                'operations': [],
            },
            {
                'img': 'output',
                'name': 'Write',
                'operations': [],
            },
        ],
        'halt': False,
    },

    1: {
        'infoTitle': 'Heap',
        'name': '2 - Bad memory',
        'status': 'desligado',
        'opcodes': instructions.basic,
        'code':{
            'limit': 9,
            'contents': [],
        },
        'stack': {
            'limit': 8,
            'contents': [],
        },
        'memory': {
            'limit': 64,
            'contents': [randint(-255, 255) for _ in range(64)],
        },
        'gprs': ['A', 'B'],
        'registers': {},
        'returnRegister': 'A',
        'cycle': 1000,
        'pipeline': [
            {
                'img': 'input',
                'name': 'Fetch',
                'operations': ['ins_fetch', 'decode', 'execute', 'mem', 'write'],
            },
            {
                'img': 'box',
                'name': 'Decode',
                'operations': [],
            },
            {
                'img': 'alu',
                'name': 'Exec',
                'operations': [],
            },
            {
                'img': 'output',
                'name': 'Write',
                'operations': [],
            },
        ],
        'halt': False,
    },

    2: {
        'infoTitle': 'Control Hazzards',
        'name': '3 - No jumping!',
        'status': 'desligado',
        'opcodes': instructions.opcodes,
        'code':{
            'limit': 20,
            'contents': [],
        },
        'stack': {
            'limit': 16,
            'contents': [],
        },
        'memory': {
            'limit': 128,
            'contents': [randint(-255, 255) for _ in range(64)],
        },
        'gprs': ['A', 'B', 'C'],
        'registers': {},
        'returnRegister': 'A',
        'cycle': 1000,
        'pipeline': [
            {
                'img': 'input',
                'name': 'Fetch',
                'operations': ['ins_fetch', 'decode', 'execute', 'mem', 'write'],
            },
            {
                'img': 'box',
                'name': 'Decode',
                'operations': [],
            },
            {
                'img': 'alu',
                'name': 'Exec',
                'operations': [],
            },
            {
                'img': 'box',
                'name': 'Memory',
                'operations': [],
            },
            {
                'img': 'output',
                'name': 'Write',
                'operations': [],
            },
        ],
        'halt': False,
    }
}
