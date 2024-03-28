"use strict";
// Responsabilidade única
// Um módulo (um arquivo fonte) deve ser responsável por um ator.
// Ator - 
class Funcionario {
    horasRegulares() {
        this.salvar();
    }
    // responsabilidade do departamento de contabilidade
    calcularPagamento() {
        this.horasRegulares();
        this.salvar();
        return 0;
    }
    // responsabilidade do departamento de recursos humanos
    reportarHoras() {
        this.horasRegulares();
        this.salvar();
    }
    // responsabilidade dos administradores de base de dados
    // FuncionarioData
    salvar() { }
}
;
/* ( lembremos que através das classes criamos
*  verdadeiras estruturas de dados
*  que "conjugam" dados e comportamentos )
*  Perceba que a classe "Boleto" contêm métodos
*  fora dos limites de um boleto*/
class Boleto {
    gerar() {
        return "=====\n69R$ produto\n=====";
    }
    //responsabilidade de outra classe de email ...
    //perceba também a dependência concreta com "MensagemEmail"
    enviarEmail() {
        //let email = new MensagemEmail( "a@foo.com", "b@foo.com" );
        //restante
    }
}
;
class BoletoRefatorado {
    //injeção de dependência
    constructor(email) {
        this.email = email;
    }
    gerar() {
        let boletoTexto = "=====\n69R$ produto\n=====";
        this.email.criar(boletoTexto);
        this.email.enviar("empresa@foo.com", "cliente@foo.com");
        return boletoTexto;
    }
}
;
