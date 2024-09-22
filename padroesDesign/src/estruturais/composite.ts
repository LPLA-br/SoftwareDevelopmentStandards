/**
 * Compor objetos em estruturas de árvore para representarem
 * hierarquias parte-todo. Muito comum em aplicações gráficas.
 * Parte-se das mais primitivas paras as mais complexas.
 *
 * Linha
 * Texto
 *  Retangulo
 *    CaixaTexto
 *    ...
 *
 * Participantes
 *  Component/Componente -
 *    Declara interface para objetos na composição;
 *    Implementa comportamento padrão para a interface comum a todas as classes, comforme apropriado;
 *    Declara uma interface para acessar e gerenciar os seus componentes filhos;
 *    (opt) Define uma interface para acessar e gerenciar os seus componentes-filhos
 *  Leaf/Folha
 *    Representa objetos-folha na composição. Uma folha NÃO tem filhos;
 *    Define comportamento para objetos primitivos na composição.
 *  Composite
 *    Define comportamento para componentes que têm filhos;
 *    Armazena os componentes-filho;
 *    Implementa as operações relacionadas com os filhos presentes na interface
 *    de compoment.
 *  Client
 *    Manipula objetos na composição através da interface de Component.
 * */

interface IGrafico
{
  desenhar(): string;
  adicionar( grafico: IGrafico ): void;
  remover(): IGrafico | undefined;
  get_Filho( posicao: number ): IGrafico | undefined;
};

/** COMPONENT
* O grande abastrato */
abstract class Grafico implements IGrafico
{
  protected subComponentes: Grafico[];
  protected conteudo: string;

  constructor()
  {
    this.subComponentes = [];
    this.conteudo = "";
  }

  /** imprime conteudo para stdout */
  public abstract desenhar(): string

  /** adiciona sub componente */
  public adicionar( grafico: Grafico )
  {
    this.subComponentes.push( grafico );
  }

  /** remove último sub componente */
  public remover(): Grafico | undefined
  {
    return this.subComponentes.pop();
  }

  /** obtem conteudo protegido para filhos */
  public get_Filho( posicao: number ): Grafico | undefined
  {
    if ( posicao > this.subComponentes.length || posicao < 0 )
    {
      return undefined;
    }
    else
    {
      return this.subComponentes[posicao];
    }
  }

};


/** LEAFs/ FOLHAS (F O L H A S    N Ã O    T Ê M    F I L H O S)*/
class Linha extends Grafico
{
  protected comprimento: number;

  constructor( comprimento: number )
  {
    super();
    this.comprimento = comprimento;
  }

  /** desenha a si própria */
  public desenhar(): string
  {
    return "#".repeat( this.comprimento );
  }

};

class Texto extends Grafico
{
  protected texto: string;

  constructor( texto: string )
  {
    super();
    this.texto = texto;
  }

  public desenhar(): string
  {
    return this.texto;
  }

};

/** COMPOSITE */
class Compositor extends Grafico
{

  /** imprime em stdout suas Leafs */
  public desenhar(): string
  {
    for ( let i = 0; i < this.subComponentes.length; i++ )
    {
      let alvo = this.subComponentes[i];
      if ( typeof alvo !== "undefined" )
      {
        console.log( alvo.desenhar() );
      }
      else
      {
        console.log("\n");
      }
    }
    return "";
  }

};

class Client
{
  public exec()
  {
    let principal = new Compositor();

    let sub = new Compositor();

    sub.adicionar( new Linha( 10 ) );
    sub.adicionar( new Texto( "sub texto em sub compositor" ) );
    sub.adicionar( new Linha( 10 ) );
    principal.adicionar( new Linha( 10 ) );
    principal.adicionar( new Texto("rinoceteio") );
    principal.adicionar( new Linha( 10 ) );
    principal.adicionar( sub );
    principal.desenhar();
  }
};

let main = new Client();
main.exec();

