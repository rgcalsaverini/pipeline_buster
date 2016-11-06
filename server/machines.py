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
            Vamos comecar nossa vinganca pelo stack!<br/><br/>
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
                Burn, stack, burn!<br/><br/>
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
        'winCondition': "/erro.+salto.+fora.+memoria/i.test(_machine.message)",
        'infoMission': """
        <div style="width: 60vw">
            Chegou a vez do heap :)<br/><br/>
            <span style="font-size: 70%">
                Enquanto o stack eh 'mantido' pela CPU, o heap eh
                um espaco de memoria dinamicamente alocado pelo SO que
                fica a disposicao do seu codigo.
                <br><br>
                Vamos invalida-lo!<br>
            </span>
        </div>
        """,
        'infoWon': """
            <div style="width: 60vw">
                Lindo segfault!<br/><br/>
                <span style="font-size: 70%">
                    Segmentation faults ocorrem quando programas leem ou escrevem
                    em regioes invalidas de memoria, eles sao o nemesis de programadores
                    de linguagens sem garbage collection.<br/><br/>
                </span>
            </div>
        """,
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
        'winCondition': "(typeof _machine.registers._PC2 != -1 &&_machine.registers.PC - _machine.registers._PC2 != 1)",
        'infoMission': """
        <div style="width: 60vw">
            Hora de atacar o pipeline!<br/><br/>
            <span style="font-size: 70%">
                Como em uma linha de montagem, o processador tenta executar
                paralelamente varias etapas relacionadas com a execucao de codigo,
                isso eh o chamado pipelining.<br/><br/>
                Isso pode trazer alguns problemas, porem. Os chamados 'Control
                Hazzards' dizem respeito aos problemas que emergem de branches
                no codigo.<br/><br/>
                Veja se consegue quebrar a proxima arquitetura!<br/><br/>
                <img style="display: block; width: 30vw; position: relative;left: 15vw" src="/static/imgs/pipeline1.svg"/>
            </span>
        </div>
        """,
        'infoWon': """
            <div style="width: 60vw">
                Boa!<br/><br/>
                <span style="font-size: 70%">
                    O problema de prever e lidar com branches eh um muito pesquisado
                    na computacao, e novas solucoes continuam aparecendo.<br/><br/>
                    Control Hazards tem um impacto muito grande sobre a performance
                    das arquiteturas atuais.
                </span>
            </div>
        """,
    },

    666: {
        'infoTitle': 'Sandbox',
        'name': 'Unbreakable computer',
        'status': 'desligado',
        'opcodes': instructions.opcodes,
        'code':{
            'limit': 99,
            'contents': [],
        },
        'stack': {
            'limit': 20,
            'contents': [],
        },
        'memory': {
            'limit': 1024,
            'contents': [randint(-255, 255) for _ in range(1024)],
        },
        'gprs': ['A', 'B', 'C'],
        'registers': {},
        'returnRegister': 'A',
        'cycle': 1000,
        'pipeline': [
            {
                'img': 'box',
                'name': 'Unpipelined',
                'operations': ['ins_fetch', 'decode', 'execute', 'mem', 'write'],
            },
        ],
        'halt': False,
        'winCondition': "(false)",
        'infoMission': """
        Este eh apenas um sandbox.<br/>
        Nada para quebrar aqui.<br/>
        Sossega<br/>
        """,
        'infoWon': """
        Como??? :O
        """,
    },
}
