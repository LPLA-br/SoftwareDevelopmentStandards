/* Método fábrica ou virtual constructor
 * Definir interface para criar objeto, mas deixar as subclasses decidirem
 * que classe instânciar. Permite adiar instânciação para subclasses.
 *
 * Frameworks as usam para definir e manter relacionamentos entre
 * objetos
 *
 * Produto - Define a interface de objetos que o método fábrica cria.
 * ProdutoConcreto - implementa a interface de Product
 * Criador - Declara o método fábrica, o qual retorna um objeto do tipo Product.
 * Criador também pode definir uma implementação por omissão do método fábrica
 * que retorna por omissão um objeto ProdutoConcreto
* */


//Produto Abstrações
interface IVeiculo
{
  velocidadeMaxima:number;
  razaoAceleracao:number;
  
  acelerar(): void;
  desacelerar(): void;
};

abstract class AVeiculo
{
  protected velocidadeMaxima: number;
  protected razaoAceleracao: number;

  constructor( velMaxima: number, razaoAceleracao:number )
  {
    this.velocidadeMaxima = velMaxima;
    this.razaoAceleracao = razaoAceleracao;
  }

  public abstract acelerar(): void;
  public abstract desacelerar(): void;
}

//Produtos concretos
class Chevette implements IVeiculo
{
  public velocidadeMaxima: number;
  public razaoAceleracao: number;

  constructor()
  {
    this.velocidadeMaxima = 150;
    this.razaoAceleracao = 10;
  }

  public acelerar(): void
  {
    //
  }

  public desacelerar(): void
  {
    //
  }
}

class Ferrari implements IVeiculo
{
  public velocidadeMaxima: number;
  public razaoAceleracao: number;

  constructor()
  {
    this.velocidadeMaxima = 320;
    this.razaoAceleracao = 100;
  }

  public acelerar(): void
  {
    //
  }

  public desacelerar(): void
  {
    //
  }
}

//Criador
class Autodromo
{
  public novaFerrari(): IVeiculo
  {
    return new Ferrari();
  }

  public novoChevette(): IVeiculo
  {
    return new Chevette();
  }
}

