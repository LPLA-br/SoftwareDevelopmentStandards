/* Fábrica Abstrata ou kit
 * Fornecer uma interface para criação de familias de objetos relacionados
 * ou dependentes sem especificar suas classes concretas.
 *
 * Participantes
 *  AbstractFactory - declara uma interface para operações que criam objetos-produtos
 *  abstratos.
 *  AbstractProduct - declara interface para um tipo de objeto-produto.
 *
 *  ConcreteFactory - implementa as operações que criam objetos-produto concretos.
 *  ConcreteProduct - define um objeto-produto a ser criado pela correspondente fábrica
 *  concreta E implementa a interface de AbstractProduct.
 *
 *  Client - classe usuária exclusiva mandatória das interfaces declaradas pelas
 *  classes AbstractFactory e AbstractProduct.
 * */


// PRODUTOS ABSTRATOS
interface IPessoaJuridica
{
  cnpj: string;
  getCnpj(): string;
};

interface IPessoaFisica
{
  cpf: string;
  getCpf(): string;
};

// FÁBRICAS ABSTRATAS
interface IFabricaPessoas
{
  criarPessoaJuridica( cnpj: string ): IPessoaJuridica;
  criarPessoaFisica( cpf: string ): IPessoaFisica;
};

// PRODUTOS CONCRETOS
class PessoaJuridica implements IPessoaJuridica
{
  public cnpj: string;

  constructor( cnpj: string )
  {
    this.cpnj = cnpj;
  }

  public getCnpj(): string
  {
    return this.cnpj;
  }
};

class PessoaFisica implements IPessoaFisica
{
  public cpf: string;

  constructor( cpf: string )
  {
    this.cpf = cpf;
  }

  public getCpf(): string
  {
    return this.cpf;
  }
};

// FÁBRICAS CONCRETAS
class FabricaPessoas implements IFabricaPessoas
{
  constructor()
  {}

  public criarPessoaJuridica( cnpj:string ): IPessoaFisica
  {
    return new PessoaJuridica( cnpj );
  }

  public criarPessoaFisica( cpf:string ): IPessoaFisica
  {
    return new PessoaFisica( cpf );
  }

};

// CLIENTE 00.000.000/0000.00

class ReceitaFederal
{

  public extorquidos: IPessoaFisica[];
  public empresasRefens: IPessoaJuridica[];

  protected fabricaPessoa: IFabricaPessoas;

  constructor( fabricaPessoa: IFabricaPessoas )
  {
    this.extorquidos = [];
    this.empresasRefens = [];

    this.fabricaPessoa = fabricaPessoa;
  }

  public registrarExtorquido()
  {
    this.extorquidos.push( this.fabricaPessoa.criarPessoaFisica( '000.000.000-00' ) );
  }
  
  public registrarEmpresaExtorquida()
  {
    this.empresasRefens.push(
      this.fabricaPessoa.criarPessoaJuridica( '00.000.000./0000.00' )
    );
  }

};

