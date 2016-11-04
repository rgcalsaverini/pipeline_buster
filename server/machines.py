from server.instructions import basic

machines = {
    0: {
        'name': 'Basic Non-Pipelined',
        'status': 'desligado',
        'opcodes': basic,
        'code':{
            'limit': 20,
            'contents': [],
        },
        'stack': {
            'limit': 12,
            'contents': [],
        },
        'gprs': ['A', 'B', 'C'],
        'registers': {},
        'returnRegister': 'A',
        'pipeline': [
            {
                'img': 'block',
                'text': 'Not Pipelined',
                'operations': ['ins_fetch', 'decode', 'exec', 'mem', 'write'],
            },
        ],
    }
}
