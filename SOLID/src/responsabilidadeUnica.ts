// Responsabilidade única
// Um módulo (um arquivo fonte) deve ser responsável por um ator.
// Ator - 

class Funcionario
{

  protected horasRegulares():void
  {
    this.salvar();
  }

  // responsabilidade do departamento de contabilidade
  public calcularPagamento(): number
  {
    this.horasRegulares();
    this.salvar();
    return 0;
  }

  // responsabilidade do departamento de recursos humanos
  public reportarHoras(): void
  {
    this.horasRegulares();
    this.salvar();
  }

  // responsabilidade dos administradores de base de dados
  // FuncionarioData
  public salvar(): void
  {}

}

// DUPLICAÇÃO ACIDENTAL
/* Perceba que alteração em horasRegulares() pode acidentalmente
 * afetar outras partes.
 * É necessário separar o código que dá suporte a atores diferentes.
* */

// FUSÕES
/* mudanças no esquema da tabela exigidas pelos dbadmins
*  podería conflitar com mudanças no formato de reatório das
*  horas exigidas pelo departamento RH.
* */

// SOLUÇÕES
// Mover funções para classes diferentes com acesso a FuncionarioData.
// separar dados das funções (todas tendo acesso à FuncionarioData).

//####################################
interface IMensagemEmail
{
  criar( texto:string ): string;
  enviar( remetente:string, destinatario:string ): void;
};

/* ( lembremos que através das classes criamos
*  verdadeiras estruturas de dados
*  que "conjugam" dados e comportamentos )
*  Perceba que a classe "Boleto" contêm métodos
*  fora dos limites de um boleto*/
class Boleto
{
  public gerar(): string
  {
    return "=====\n69R$ produto\n=====";
  }

  //responsabilidade de outra classe de email ...
  //perceba também a dependência concreta com "MensagemEmail"
  public enviarEmail(): void
  {
    //let email = new MensagemEmail( "a@foo.com", "b@foo.com" );
    //restante
  }
};

class BoletoRefatorado
{

  protected readonly email: IMensagemEmail;

  //injeção de dependência
  constructor( email:IMensagemEmail )
  {
    this.email = email;
  }

  public gerar(): string
  {
    let boletoTexto: string = "=====\n69R$ produto\n=====";
    this.email.criar( boletoTexto );
    this.email.enviar( "empresa@foo.com", "cliente@foo.com" );
    return boletoTexto;
  }

};

