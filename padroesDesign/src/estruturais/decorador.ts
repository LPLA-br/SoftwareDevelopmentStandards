/* Decorator ou wrapper
 * Dinamicamente, agregar responsabilidades adicionais a um objeto. Os decoradores
 * fornecem uma alternativa flexível ao uso de subclasses para exensão de
 * funcionalidades.
 *
 * Participantes
 *  IComponent -
 *    Define a interface para objetos que podem ter responsabilidades acrescentadas
 *    a eles dinamicamente.
 *  ConcreteComponent -
 *    Define um objeto para o qual comportamentos/responsabilidades adicionais podem ser atribuidas
 *  Decorator -
 *    Mantem uma referência para um objeto IComponent e define uma interface que
 *    segue a interface de Component.
 *  ConcreteDecorator -
 *    Acrescenta responsabilidades ao componente.
 *
 * Coposição Recursiva
 * */

// Interface Componente
interface ISuperficieBidimensional
{
  desenharSupericie( caractere: string ): void;
};



// ConcreteComponent - Classe principal extensível por decoradores
class SuperificieBidimensional implements ISuperficieBidimensional
{
  protected altura: number;
  protected largura: number;

  constructor( altura: number, largura: number )
  {
    this.altura = altura;
    this.largura = largura;
  }

  desenharSupericie( caractere: string ): void
  {
    console.log( caractere.repeat( this.largura + 2 ) );
    for( let linha = 0; linha < this.altura; linha++ )
    {
      console.log( caractere + ' '.repeat( this.largura ) + caractere );
    }
    console.log( caractere.repeat( this.largura + 2 ) );
  }
}


// DECORADORES

class SuperificieBidimensionalComTitulo implements ISuperficieBidimensional
{
  protected altura: number;
  protected largura: number;
  protected titulo: string;
  protected superificeBidimensional: ISuperficieBidimensional;

  // recebe objeto que adota o mesmo contrato que ele próprio
  constructor( superificeBidimensional: ISuperficieBidimensional, altura: number, largura: number, titulo: string )
  {
    this.superificeBidimensional = superificeBidimensional;
    this.altura = altura;
    this.largura = largura;
    this.titulo = titulo;
  }

  public desenharSupericie( caractere: string ): any
  {
    console.log( this.titulo + caractere.repeat( this.largura - this.titulo.length + 2) );

    // invocação da "boneca russa" envolvida
    this.superificeBidimensional.desenharSupericie( caractere );
  }
}




class SuperificieBidimensionalComRodape implements ISuperficieBidimensional
{
  protected altura: number;
  protected largura: number;
  protected mensagem: string;
  protected superificeBidimensional: ISuperficieBidimensional;

  constructor( superificeBidimensional: ISuperficieBidimensional, altura: number, largura: number, mensagem: string )
  {
    this.superificeBidimensional = superificeBidimensional;
    this.altura = altura;
    this.largura = largura;
    this.mensagem = mensagem;
  }

  public desenharSupericie( caractere: string ): void
  {
    this.superificeBidimensional.desenharSupericie( caractere );

    console.log( this.mensagem + caractere.repeat( this.largura - this.mensagem.length + 2) );
  }

}



// CÓDIGO CLIENTE
/* Execução em cadeia parecida com o padrão Chain of Responsibility
   Difere por não ser obrigado a seguir ordem */

let obj = new SuperificieBidimensional( 10, 10 );

console.log("\n\n\n");

// Com barra de título ...
let ex1 = new SuperificieBidimensionalComTitulo( obj, 10, 10, "hello" );
ex1.desenharSupericie('#');

console.log("\n\n\n");

// Com barra de título e rodapé (título inverteu rsrsrs) ...
let ex20 = new SuperificieBidimensionalComRodape( obj, 10, 10, "2025©" );
let ex21 = new SuperificieBidimensionalComTitulo( ex20, 10, 10, "hello" );
ex21.desenharSupericie('#');

console.log("\n\n\n");

// Mesmo que seja ao contrário do exposto acima ...
let ex30 = new SuperificieBidimensionalComTitulo( obj, 10, 10, "2025©" );
let ex31 = new SuperificieBidimensionalComRodape( ex20, 10, 10, "hello" );
ex31.desenharSupericie('#');

console.log("\n\n\n");

// Sem barra de título e rodapé, Cru !
obj.desenharSupericie('#');

/* A CHAVE PARA COMPREENDER O DECORATOR É:
 * 1. Os decoradores recebem objetos já construidos/instânciados em seus construtores
 *    não necessitado conhecer a forma como foram construidos.
 * 2. Os objetos são compliantes de uma mesma interface/contrato que garante que métodos
 *    respeitam limites contratuais. Logo, a execução não terá supresas desagradáveis.
 * 3. Imagine teoria dos conjuntos onde o conjunto A pode ser envolvido por B,C e D
 *    nas seguintes combinações:
 *  A
 *  A B
 *  A C
 *  A D
 *  A C B
 *  A D B
 *  A D C
 *  A B C
 *  A B D
 *  A C D
 *  A B C D
 *  A B D C
 *  A C B D
 *  A C D B
 *  A D B C
 *  A D C B
 *
 * 4. Imagine que A é um servidor e B, C e D são módulos que podem ser acoplados para
 * Adicionar novos comportamentos dinâmicamente.
*/
