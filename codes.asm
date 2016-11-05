;---------------;
; Exemplo: FIBO ;
;---------------;
PUSH 1 ; Valores inciais
PUSH 1
MOV C 4 ; Loop de 0 a 4
LOOP: DEC C
JZ END
POP A
POP B
PUSH B
PUSH A
ADD A B ; Define o n-esimo
PUSH A ;   valor
JMP LOOP
END: HLT
