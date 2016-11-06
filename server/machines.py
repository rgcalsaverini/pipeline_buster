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
            'limit': 2,
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
        'winCondition': "/erro.+stack.+smash/i.test(_machine.message)",
        'infoMission': """
        <div style="width: 60vw">
            <div style="width: 40vw">
            Vamos comecar nossa vinganca com o stack!<br/><br/>
            <span style="font-size: 70%">
                Ele e um buffer de tamanho limitado, essencial para a
                chamada de funcoes, que tem seus parametros e retorno
                empilhados nele.<br><br>
                O sistema operacional e capaz de colocar e retirar dados
                do seu topo, conhecido em assembly como PUSH e POP.<br><br><br>
                Deve ter um jeito de destrui-lo!<br>
            </span>
            </div>
            <img style="display: inline-block; position: absolute; right: 70px; margin-top: -250px" src="/static/imgs/stack1.svg"/>
        </div>
        """,
        'infoWon': """
            <div style="width: 60vw">
                <div style="width: 40vw">
                Belo stack overflow!<br/><br/>
                <span style="font-size: 70%">
                    Sobrecarregar o stack, alem de ser um bug comum, eh uma
                    vulnerabilidade perigosa! Seu abuso pode gerar a escalacao de
                    privilegios e ja foi explorada para fraude em caixas eletronicos
                    nos Estados Unidos.<br><br>
                    Em geral sistemas mais modernos protegem o stack de overflow
                    usando bits (chamados canaries) com valores conhecidos logo
                    acima dele, identificando assim overflows.
                </span>
                </div>
                <img style="display: inline-block; position: absolute; right: 70px; margin-top: -250px" src="/static/imgs/stack2.svg"/>
            </div>
        """,
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
