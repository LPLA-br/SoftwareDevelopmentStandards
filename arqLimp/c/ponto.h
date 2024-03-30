#ifndef PONTO_H_INCLUDED
#define PONTO_H_INCLUDED

/* Encapsulamento perfeito em C */
struct  Ponto;
struct  Ponto* criarPonto( float x, float y );
float   distanciaEntrePontos( struct Ponto* a, struct Ponto* b );

/* Herança simples */
struct PontoNomeado;
struct PontoNomeado* criarPontoNomeado( float x, float y, char* nome );
void definirNome( char* nome, struct PontoNomeado* alvo );
char*  obterNome( struct PontoNomeado* alvo );


#endif
