/* Aberto fechado
 "Um artefato de software deve ser aberto para extensão,
 mas fechado para modificação" (extender sem modificar)

 Aplica-se Responsabilidade única para cada ator do minimundo
 e depois a inversão de dependência para evitar acoplamentos
 extremos entre classes concretas. Porfim tem-se a necessidade
 de fazer a aplicação adaptar-se a novas demandas advindas dos
 atores
 */

/* Especifica-se inicialmente um retângulo.
 * Posteriormente exigiram para circulo
 * adicionaste atributo raio e condicional
 * seletora de lógica em calcularArea() ...
 * Uma semanda depois tua classe têm N
 * elementos geométricos em um verdadeiro CAUS !
 * Se tás fugindo da extenção então tás fazendo modificação !
 * */
class FormaGeometrica
{
  tipo: string;
  altura: number;
  largura: number;
  raio:  number;

  constructor( alt:number, larg:number, ra:number, tipo:string )
  {
    this.altura = alt;
    this.largura = larg;
    this.raio = ra;
    this.tipo = tipo;
  }

  calcularArea(): number
  {
    switch( this.tipo )
    {
      case "cubo":
      case "retangulo":
        return this.altura * this.largura;
      case "circulo":
        return Math.PI*( this.raio * this.raio );
      default:
        return 0;
    }
  }
};

/* Aplicando a inversão de dependência
   e Responsabilidade única ! */

// o que é comum à todas ?
interface IFormaGeometricaPlana
{
  calcularArea(): number;
};

class Retangulo implements IFormaGeometricaPlana
{
  
  altura: number;
  largura: number;

  constructor( alt:number, larg:number)
  {
    this.altura = alt;
    this.largura = larg;
  }

  public calcularArea(): number
  {
    return this.altura * this.largura;
  }
};

class Circulo implements IFormaGeometricaPlana
{
  raio:  number;

  constructor( raio:number )
  {
    this.raio = raio;
  }

  public calcularArea(): number
  {
    return Math.PI * Math.pow( this.raio, 2 );
  }
};

