/* 
* DEMONSTRAÇÃO DAS RELAÇÕES FUNDAMENTAIS ENTRE CLASSES
* NO PARADIGMA ORIENTADO A OBJETOS.
* */

// INTERFACES ##########################
interface IDepartamento
{
  calcularPagamentoPorTempoDeServico( tempoAproxSegundos: EpochTimeStamp ): number;
};

interface IDate
{
  getDate(): number;
};

interface IDemoAdapter
{
  generico(): string;
}

// CLASSES #############################

class Departamento implements IDepartamento
{
  constructor()
  {}

  public calcularPagamentoPorTempoDeServico( tempoAproxSegundos: EpochTimeStamp ): number
  {
    return 0.0;
  }
};

class Pessoa
{
  private nome: string;

  constructor( nome: string )
  {
    this.nome = nome;
  }

  public primeiroNome(): string
  {
    return this.nome.split(' ')[0];
  }
};

class Chefe extends Pessoa
{
  constructor( nome: string )
  {
    super(nome);
  }
}

class DemostrationAdapter implements IDemoAdapter
{
  // parâmetros padronizados
  public generico(): string
  {
    //sequência flexível
    return "demo"; // retorno padronizado
  }
}

// HERANÇA
class Empregado extends Pessoa
{
  private chefe: Chefe;                 //DEPENDÊNCIA (dependência direta de maior acoplamento)
  private departamento: IDepartamento;  //DEPENDÊNCIA (inversão não flexível)
  private demostration: IDemoAdapter;   //DEPENDÊNCIA (inversão com flexibilidade (ADAPTER))

  constructor( nome: string, departamento: IDepartamento, chefe: Chefe, demostration: IDemoAdapter)
  {
    super( nome );
    this.chefe = chefe;
    this.departamento = departamento;
    this.demostration = demostration;
  }

  /* ...
   * sobrescrita de método respeitando pré-condições pós-condições
  * e invariância da classe mãe (Liskov) OU extenção por implementação de
  * novos atributos e ou métodos.*/

  public baterPonto(): void
  {
    // ASSOCIAÇÃO (alto acoplamento)
    const date = new Date().getDate();
  }

  public baterPontoAlternativo( dateHandler: IDate )
  {
    // ASSOCIAÇÃO (acomplamento mitigado (não resolvido) em nível de método)
    const date: IDate = dateHandler;
  }
};

// AGREGAÇÃO e COMPOSIÇÃO--------------------------------------------------------------

class Casa
{
  private paredes: Parede[];
  private telhado: Telhado;
  private moveis: IMovel[];
};

// COMPÕEM UMA CASA:
class Parede
{};

class Telhado
{};

// PODEM SER AGREGADOS A UMA CASA
interface IMovel
{}

class Sofa implements IMovel
{};

class Mesa implements IMovel
{};
