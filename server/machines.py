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
            # 'contents': [1],
        },
        'gprs': ['A', 'B', 'C'],
        'registers': {},
        'pipeline': {
            'img': 'block',
            'text': 'Not Pipelined',
            'operations': ['ins_fetch', 'decode', 'reg_fetch', 'exec', 'mem', 'write'],
        },
    }
}