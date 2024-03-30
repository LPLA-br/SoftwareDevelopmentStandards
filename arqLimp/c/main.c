#include <stdio.h>
#include <stdlib.h>
#include "ponto.h" 
#include "polimorfos.h"

int so( int a, int b );
int su( int a, int b );
int dx( int d, int x );

int main(int argc, char *argv[])
{
  /* Encapsulamento -------------------------------
   * Usuários de ponto.h não têm conhecimento sobre
   * a implementação da estrutura de dados ou das
   * funções. Isso é possível graças à separação
   * do código em um cabeçalho .h e definição em .c
   */

  struct Ponto* pa = criarPonto( 10, 10 );
  struct Ponto* pb = criarPonto( 20, 20 );

  printf("%f\n", distanciaEntrePontos(pa, pb) );

  /* PontoNomeado é um superconjunto puro de Ponto */
  struct PontoNomeado* pn = criarPontoNomeado( 30, 30, "casaDeMaeJoana" );

  //fazendo um cast de pn para o compilador não reclamar.
  printf( "%f\n", distanciaEntrePontos( pa, (struct Ponto*)pn ) );

  free( pa );
  free( pb );
  free( pn );

  /* A estrutura contém um ponteiro para qualquer função int(int,int)
   * funciona como uma interface nas linguagens modernas.
   * O livro exemplifica a estrutura FILE dos sistemas UNIX
   * que contém ponteiros para funções:
   * struct FILE {
      void (*open)(char* name, int mode);
      void (*close)();
      int (*read)();
      void (*write)(char);
      void (*seek)(long index, int mode);
    };
    Cada função de dispositivo compilante dos ponteiros acima
    têm uma implementação específica.
    Linguagens modernas evitam os perigos do polimorfismo com ponteiros
    pois retiram responsabilidades complexas do ombro do programador.
    Ponteiros soltos são um TERROR !
   * */

  //polimorfismo acima simplificado
  struct Conta mul = {so};
  struct Conta sub = {su};
  struct Conta wtf = {dx};
  printf( "%i\n", mul.op2( 10, 10 ) );
  printf( "%i\n", sub.op2( 10, 10 ) );
  printf( "%i\n", wtf.op2( 10, 10 ) );

	return 0;
}

int so( int a, int b )
{
  return a * b;
}

int su( int a, int b )
{
  return a + b;
}

int dx( int d, int x )
{
  return (d*x)/(10*x);
}

