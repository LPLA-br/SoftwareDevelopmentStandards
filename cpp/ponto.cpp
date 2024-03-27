#include <math.h>
#include "ponto.hpp"

Ponto::Ponto( float x, float y ): x(x), y(y)
{}

float Ponto::distancia( const Ponto& outro ) const
{
  float dx = x - outro.x;
  float dy = y - outro.y;
  return dx*dx + dy*dy;
}

