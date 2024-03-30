// PRINCÍPIO DE SUBSTITUIÇÃO DE BÁRBARA LISKOV
/* Classes derivadas podem ser substituidas
 * por suas classes Bases sem quebras.
 * */

// Atendimento de contrato por interfaces
// Inversão de dependência (abstrações)
// Responsabilidade Única (Financeiro é quem paga funcionarios)

/* Contratos estabelecem obrigações mútuas entre um "cliente"
* e um "fornecedor" */


interface IFuncionario
{
  calcularSalario(): number;
};

class Operario implements IFuncionario
{
  constructor()
  {}

  public calcularSalario(): number
  {
    return 10.0;
  }
};

class Gerente implements IFuncionario
{
  constructor()
  {}

  public calcularSalario(): number
  {
    return 100.0;
  }
};

class Vendedor implements IFuncionario
{
  constructor()
  {}

  public calcularSalario(): number
  {
    return 50.0;
  }
};


/* EXTENÇÃO DE CLASSE BASE PELA DERIVADA.
*  O "Financeiro" não deve ter problemas em trabalhar
*  com o "OperarioAjudante" pois ele é, assim como sua
*  classe base "Operario", compilante do contrato "IFuncionario"
*  que é uma abstração. Perceba também que "OperarioAjudante"
*  pode ser tido como um supercojunto que contém o "Operario"
* */
class OperarioAjudante extends Operario
{
  constructor()
  {
    super();
  }

  outroMetodo(): void
  {}
};


/** Classe do Departamento
*   financeiro.
* */
class Financeiro
{
  constructor()
  {}

  /** Financeiro tem sua Responsabilidade de pagar os
   *  colaboradores desta instituição.
  * */
  public pagarFuncionario( cargo: IFuncionario ): number
  {
    return cargo.calcularSalario();
  }
};

// AÇÃO !!

let funcionarios: IFuncionario[] = [ new Operario(), new OperarioAjudante(), new Gerente(), new Vendedor() ];
let departamentoFinanceiro = new Financeiro();

departamentoFinanceiro.pagarFuncionario( funcionarios[0] );
departamentoFinanceiro.pagarFuncionario( funcionarios[1] );
departamentoFinanceiro.pagarFuncionario( funcionarios[2] );
departamentoFinanceiro.pagarFuncionario( funcionarios[3] );

