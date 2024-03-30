#include <iostream>
#include "ponto.hpp"

int main(void)
{
  /* Encapsulamento -------------------------------
   * No C o header contém apenas declarações e o .c o detalhamento
   * com variáveis.
   * em C++ o header contém variáveis quebrando o encapsulamento
   * que é parciamente concertado através de public, protected
   * e private.
   * Linguagens modernas aboliram header/implementação
   * */

  Ponto pa = Ponto(10, 10);
  Ponto pb = Ponto(20, 20);

  std::cout << pa.distancia( pb ) << '\n';

  return 0;
}

