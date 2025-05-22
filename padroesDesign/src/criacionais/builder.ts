/* Builder
 * Separar a construção de um objeto complexo da sua representação de modo que o
 * mesmo processo de construção possa criar diferentes represetações.
 *
 * Participantes
 * IBuilder - Interface abstrata para criação de partes de um objeto-produto.
 * ConcreteBuilder -
 *  Constrói e monta partes do produto pela implementação da interface de IBuilder.
 * Director - Constrói um objeto usando a interface de Builder (Opcional).
 * Product - 
 *  Representa o objeto complexo em construção. ConcreteBuilder constrói a
 *  representação interna do produto e define o processo pelo qual ele é montado.
 *  Inclui classes que definem as partes constituintes, inclusive as interfaces
 *  para a montagem das partes no resultado final.
 *
 * O problema principal reside no fato de que a extensão por
 * herança para cada caso possível criará uma quantidade enorme
 * de classes filhas a serem gerenciadas.
 *
 * Alternativamente aumentar a quantidade de parâmetros de construtor
 * cria o problema parecido com o da não segregação de interfaces:
 * A maioria dos objetos instânciados de tal classe conterá informações
 * inutilizados para suas necessidades. (estudos posteriores mostram
 * que este padrão não evita grandes construtores, mas, torna a construção
 * mais segura por esconder a complexidade (teoricamente))
 *
 * Builder sujere, de forma simples, que o processo de contruir este
 * objeto complexo seja delegado a um agente externo chamado "Builder".
 *
 * Builder permite produzir diferentes tipos de representações de um
 * objeto usando o mesmo código de construção.
 * */

type TCasas = "popular" | "luxo";

/* Tratamento exceção é necessário devido aos atributos ignoráveis.
* Problema do objeto com grande quantidade de atributos inúteis pode
* surgir (compromentimento no consumo de memória ?!).*/
class Casa
{
  private areaInterna: number;
  private areaGaragem?: number;

  //Evitar grandes construtores: mito detonado
  constructor( areaInterna: number, areaGaragem?: number ) //etc ...
  {
    this.areaInterna = areaInterna;
    if ( typeof areaGaragem == "number" )
    {
      this.areaGaragem = areaGaragem;
    }
  }

  //Encapsulamento possivelmente em cheque
  public setAreaInterna( area: number ): void
  {
    this.areaInterna = area;
  }

  public setAreaGaragem( area: number ): void
  {
    if( typeof this.areaGaragem != "undefined" )
    {
      this.areaGaragem = area;
    }
  }

  public comportamentoAbstrato(): void
  {
    if ( typeof this.areaGaragem != "undefined" )
    {
      this.areaGaragem;
    }
    this.areaInterna;
  }

  public comportamentoAbstratoDependenteDeOpcional()
  {
    if ( this.areaGaragem === undefined )
    {
      throw new Error("Casa.comportamentoAbstratoDependenteDeOpcional() método não utlizável");
    }

    this.areaGaragem;
  }
}



// INTERFACES

interface ICasaConstrutor
{
  redefinir(): void;
  definirAreaInterna( area: number ): void;
  obterResultado(): Casa;
};

// aplicando principio da segregação de interfaces
interface ICasaLuxoConstrutor
{
  definirAreaGaragem( area: number ): void;
};





class ConstrutorCasaPopular implements ICasaConstrutor
{
  protected produto: Casa;

  constructor()
  {
    this.produto = new Casa(0);
  }

  public redefinir(): any
  {
    this.produto = new Casa(0);
  }

  definirAreaInterna( area: number ): void
  {
    this.produto.setAreaInterna( area );
  }

  public obterResultado(): Casa
  {
    return this.produto;
  }
};

class ConstrutorCasaDeLuxo implements ICasaConstrutor, ICasaLuxoConstrutor
{
  protected produto: Casa;

  constructor()
  {
    this.produto = new Casa(0);
  }

  public redefinir(): any
  {
    this.produto = new Casa(0);
  }

  public definirAreaInterna( area: number ): void
  {
    this.produto.setAreaInterna( area);
  }

  public definirAreaGaragem( area: number ): void
  {
    this.produto.setAreaGaragem( area );
  }

  public obterResultado(): Casa
  {
    return this.produto;
  }
};




/*Classe opcional - estudos mostraram que a classe diretora, atuante como uma
* espécie de fachada, pode ser descartada e os Builders utilizados diretamente.
* A fronteira entre extender e modificar fica nebulosa nesta classe.*/
class CasaDiretor
{

  //Quebra da segregação de interfaces feita anteriormente
  protected construtorCasa: ICasaConstrutor;
  protected construtorCasaLuxo: ICasaConstrutor & ICasaLuxoConstrutor; // Abrindo para extensão
  
  constructor( construtorCasa: ICasaConstrutor, construtorCasaDeLuxo: ICasaConstrutor & ICasaLuxoConstrutor )
  {
    this.construtorCasa = construtorCasa; //nome ruim
    this.construtorCasaLuxo = construtorCasaDeLuxo;
  }

  public alterarConstrutor( construtorCasa: ICasaConstrutor ): void
  {
    this.construtorCasa = construtorCasa;
  }

  // Abrindo para extensão
  public alterarConstrutorCasaLuxo( construtorCasaDeLuxo: ICasaConstrutor & ICasaLuxoConstrutor  ): void
  {
    this.construtorCasaLuxo = construtorCasaDeLuxo;
  }

  public aedificar( tipo: TCasas, areaInterna: number, areaGaragem?: number ): Casa
  {
    switch( tipo )
    {
      case "popular":
        this.construtorCasa.definirAreaInterna(areaInterna);
        return this.construtorCasa.obterResultado();
      case "luxo":
        this.construtorCasaLuxo.definirAreaInterna(areaInterna);
        if ( areaGaragem !== undefined ) this.construtorCasaLuxo.definirAreaGaragem(areaGaragem);
        return this.construtorCasaLuxo.obterResultado();
    }
  }

  /*ALTERNATIVA concordante com segregação de interfaces
  * Diretor Torna-se DEPENDENTE de todos construtores correlatos.
  * Solução de altíssimo acoplamento 1..N
  * */

  public aedificarCasaPopular( areaInterna: number ): Casa
  {
    const construtorCasaPopular = new ConstrutorCasaPopular();
    construtorCasaPopular.definirAreaInterna( areaInterna );
    return construtorCasaPopular.obterResultado();
  }

  public aedificarCasaDeLuxo( areaInterna: number, areaGaragem: number ): Casa
  {
    const construtorCasaDeLuxo = new ConstrutorCasaDeLuxo();
    construtorCasaDeLuxo.definirAreaInterna( areaInterna );
    construtorCasaDeLuxo.definirAreaGaragem( areaGaragem );
    return construtorCasaDeLuxo.obterResultado();
  }

  /*ALTERNATIVA que aproveita os multiplos atributos "interfaciados"*/
  public aedificarCasaPopular2( areaInterna: number ): Casa
  {
    this.construtorCasa.definirAreaInterna( areaInterna );
    return this.construtorCasa.obterResultado(  );
  }

  public aedificarCasaDeLuxo2( areaInterna: number, areaGaragem: number ): Casa
  {
    this.construtorCasaLuxo.definirAreaInterna( areaInterna );
    this.construtorCasaLuxo.definirAreaGaragem( areaGaragem );
    return this.construtorCasaLuxo.obterResultado();
  }
};

// CÓDIGO CLIENTE

const d = new CasaDiretor( new ConstrutorCasaPopular(), new ConstrutorCasaDeLuxo() );
let casa = d.aedificar( "luxo", 50, 20 );
casa.comportamentoAbstrato();

// et cetera ...
