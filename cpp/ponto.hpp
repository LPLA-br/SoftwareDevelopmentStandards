#ifndef PONTO_H_INCLUDED
#define PONTO_H_INCLUDED

class Ponto
{
  public:
    Ponto( float x, float y );
    float distancia( const Ponto& outro ) const;

  protected:
  private:
    float x;
    float y;
};

#endif
