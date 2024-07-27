/***************************************************************
 * ADAPTADOR / ADAPTER ou EMBRULHO / WRAPPER
 * PADRÃO ESTRUTRURAL
 * Converter a interface de uma classe em outra interface,
 * esperada pelos clientes.
 * O Adapter permite que classes com interfaces incompatíveis
 * colaborem, o que, de outra forma, seria impossível.
 *
 * PARTICIPANTES:
 * Alvo/Target - Define a interface específica do domínio que
 *               Client usa.
 * Client - Colabora com objetos compatíveis com a interface target.
 * Adaptee/Adaptado - Define uma interface existente que
 *                    necessita ser adaptada.
 * Adapter/Adaptador - Adapta a interface do adaptee à interface de
 *                     target.
 *
 * COLABORAÇÕES
 * Clientes chamam operações em uma instância de Adapter.
 * Por sua vez, o adapter chama operações de Adaptee executânturos
 * da solicitação.
 *
 * Um adaptador de classe usa a herança múltipla para adaptar uma
 * interface a outra.
 * Um adaptador de objetos depende da composição de objetos.
 *
 ***************************************************************/

// exemplo para briquedo infantil de peças que passam ou não.

interface IFormaSocavelEmBuracosRedondos
{
  getRaio(): number;
}

class Cilindro implements IFormaSocavelEmBuracosRedondos
{
  protected raio: number;
  protected altura: number;

  constructor( raio: number, altura: number )
  {
    this.raio = raio;
    this.altura = altura;
  }

  public getRaio(): number
  {
    return this.raio;
  }
}

class Cubo
{
  protected largura: number;

  constructor( largura: number )
  {
    this.largura = largura;
  }

  public obterLargura(): number
  {
    return this.largura;
  }

}

// classe intermediária que permite que o cubo adapte-se
class AdaptarCubo implements IFormaSocavelEmBuracosRedondos
{
  cubo: Cubo;

  constructor( cubo: Cubo )
  {
    this.cubo = cubo;
  }

  /** Um Cubo pode passar em um buraco
  * redondo. Mas requer uma forma diferente de 
  * aferição já que não possui raio*/
  public getRaio(): number
  {
    return this.cubo.obterLargura()*Math.sqrt(2)/2;
  }

}

class BuracoRedondo
{
  protected raio: number;

  constructor( raio: number )
  {
    this.raio = raio;
  }

  public getRaio(): number
  {
    return this.raio;
  }

  public encaixar( objeto: IFormaSocavelEmBuracosRedondos ): boolean
  {
    if ( objeto.getRaio() <= this.raio )
      return true;
    else
      return false;
  }

}

const buraco = new BuracoRedondo( 10 );

const cubo1 = new Cubo(5);
const cubo2 = new Cubo(15);
const cilindro1 = new Cilindro(5,10);
const cilindro2 = new Cilindro(15,10);

console.log(
  buraco.encaixar( cilindro1 ),
  buraco.encaixar( cilindro2 ),
  buraco.encaixar( new AdaptarCubo( cubo1 ) ),
  buraco.encaixar( new AdaptarCubo( cubo2 ) ),
);
