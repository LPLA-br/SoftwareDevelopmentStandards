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
interface IButton
{
  render(): void;
  onClick(): void;
}

//Produtos Concretos
class BotaoGTK implements IButton
{
  public render(): void
  {
    console.log('<object class="GtkButton"></object>');
  }

  public onClick(): void
  {

  }

}

class BotaoHTML implements IButton
{
  public render(): void
  {
    console.log("<button></button>");
  }

  public onClick(): void
  {

  }

}

//criador abstrato
abstract class DialogCreator
{

  public abstract criarBotao(): IButton
}

//criadores concretos herdeiros
class DialogoJanela extends DialogCreator
{
  constructor()
  {
    super();
  }

  public criarBotao(): IButton
  {
    return new BotaoGTK();
  }
}

class DialogoWeb extends DialogCreator
{
  constructor()
  {
    super();
  }

  public criarBotao(): IButton
  {
    return new BotaoHTML();
  }
}

const a = new DialogoJanela().criarBotao();
const b = new DialogoWeb().criarBotao();
a.render();
b.render();

