MOV A 1
LOOP: CMP A 10
JGE END
CMP A 2
JG TREEUP
MOV C 1
MOV B 1
PUSH 1
INC A
JMP LOOP
TREEUP: PUSH A
MOV A B
ADD B C
MOV C A
POP A
PUSH B
INC A
JMP LOOP
END: MOV A 0

newLabel

;-------------------------;
;Conta_de_0_a_10_e_imprime;
;-------------------------;
;
MOV A 0 ;Inicializa_contador
LOOP: MOV B A
SUB B 10 ;Testa_de_counter_<_10
JZ END ;Se_for_finaliza_loop
PUSH A ;enao_adiciona_ao_stack
INC A
JMP LOOP
END: PRS


NOP
DOIS: JMP UM
NOP
NOP
NOP
JMP FIM
UM: PUSH 1
JMP DOIS
NOP
NOP
FIM: NOP
