/* PRINCÍPIO DA SEGREGAÇÃO DE INTERFACE */
/* Clientes não devem ser forçados a dependerem de métodos que não usam.
* Programaticamente interfaces grandes são quebradas em partes garantindo
* que classes de implementação só terão o necessário. */

//VIOLANDO O PRINCÍPIO
/*Notarás que lembra o princípio aberto fechado só
  que atuando para toda a interface como um "corpo".*/
interface IPostagem
{
  criarPost(): void;

  /*Método adicionado posteriormente.
  O programador renomeia a interface para IPostagemNovo.
  Perceba que classes que implementavam IPostagem antes desta
  modificação agora são obrigadas a se atualizarem, querendo ou
  não, à tal funcionalidade.*/
  readPost(): void;
};

class Demo1 implements IPostagem
{
  criarPost(): void
  {
    console.log("edit> |");
  }

  /*classe: fui obrigado a implementar esse excremento
    abaixo ! Nem preciso dessa porcaria aqui !!!! */
  readPost(): void
  {}

};

//SOLUÇÃO
/*A criação de interfaces especializadas evitam
o problema supracitado.*/
interface IPostagemCreate
{
  criarPost(): void;
};

interface IPostagemRead
{
  readPost(): void;
};

class Demo2 implements IPostagemRead, IPostagemCreate
{
  constructor()
  {}

  criarPost(): void
  {
    console.log("edit> |");
  }

  readPost(): void
  {
    console.log("Quem quer o aviãozinho ?!?");
  }

};

