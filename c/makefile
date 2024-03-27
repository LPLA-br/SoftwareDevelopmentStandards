#NOME DO PROJETO
PROJ_NAME=programa

#COMPILADOR
CC=gcc

#FLAGS DO COMPILADOR
CC_FLAGS=-lm		\

# CÓDIGOS FONTE
SRCS= ponto.c

# OBJETOS GERADOS DOS CÓDIGOS FONTE
OBJS= ponto.o main.o

#COMPILAÇÃO FINAL

all: $(OBJS)
	$(CC) $(OBJS) -o $(PROJ_NAME).out $(CC_FLAGS)


#COMPILAÇÃO DOS OBJETOS

ponto.o:
	$(CC) -c ponto.c -o ponto.o

main.o:
	$(CC) -c main.c -o main.o

# REMOÇÃO LIMPA

clean:
	rm ./${PROJ_NAME}.out *.o 

