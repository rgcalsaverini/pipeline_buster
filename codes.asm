; Fibo
MOV A 1
CMP A 10
JGE 19
CMP A 2
JG 11
MOV C 1
MOV B 1
PUSH 1
INC A
JMP 2
PUSH A
MOV A B
ADD B C
MOV C A
POP A
PUSH B
INC A
JMP 2
MOV A 0

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
