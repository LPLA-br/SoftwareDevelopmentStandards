#include "ponto.h"
#include <stdlib.h>
#include <math.h> //-lm
#include <string.h>

struct Ponto
{
  float x, y;
};

struct Ponto* criarPonto( float x, float y )
{
  struct Ponto* novo = malloc( sizeof( struct Ponto ) );
  novo->x = x;
  novo->y = y;
  return novo;
}

float distanciaEntrePontos( struct Ponto* a, struct Ponto* b )
{
  float distanciaX = a->x - b->x;
  float distanciaY = a->y - b->y;
  return sqrt( distanciaX*distanciaX + distanciaY*distanciaY );
}

/* herança simples */
struct PontoNomeado
{
  float x, y;
  char* nome;
};

struct PontoNomeado* criarPontoNomeado( float x, float y, char* nome )
{
  struct PontoNomeado* novo = malloc( sizeof( struct PontoNomeado ) );
  novo->x = x;
  novo->y = y;
  novo->nome = nome;
  return novo;
}

void definirNome( char* nome, struct PontoNomeado* alvo )
{
  strcpy( nome, alvo->nome );
}

char*  obterNome( struct PontoNomeado* alvo )
{
  return (alvo->nome);
}

