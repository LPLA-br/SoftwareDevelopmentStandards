"use strict";
// PRINCÍPIO DE SUBSTITUIÇÃO DE BÁRBARA LISKOV
/* Classes derivadas podem ser substituidas
 * por suas classes Bases sem quebras.
 * */
;
class Operario {
    constructor() { }
    calcularSalario() {
        return 10.0;
    }
}
;
class Gerente {
    constructor() { }
    calcularSalario() {
        return 100.0;
    }
}
;
class Vendedor {
    constructor() { }
    calcularSalario() {
        return 50.0;
    }
}
;
/* EXTENÇÃO DE CLASSE BASE PELA DERIVADA.
*  O "Financeiro" não deve ter problemas em trabalhar
*  com o "OperarioAjudante" pois ele é, assim como sua
*  classe base "Operario", compilante do contrato "IFuncionario"
*  que é uma abstração. Perceba também que "OperarioAjudante"
*  pode ser tido como um supercojunto que contém o "Operario"
* */
class OperarioAjudante extends Operario {
    constructor() {
        super();
    }
    outroMetodo() { }
}
;
/** Classe do Departamento
*   financeiro.
* */
class Financeiro {
    constructor() { }
    /** Financeiro tem sua Responsabilidade de pagar os
     *  colaboradores desta instituição.
    * */
    pagarFuncionario(cargo) {
        return cargo.calcularSalario();
    }
}
;
// AÇÃO !!
let funcionarios = [new Operario(), new OperarioAjudante(), new Gerente(), new Vendedor()];
let departamentoFinanceiro = new Financeiro();
departamentoFinanceiro.pagarFuncionario(funcionarios[0]);
departamentoFinanceiro.pagarFuncionario(funcionarios[1]);
departamentoFinanceiro.pagarFuncionario(funcionarios[2]);
departamentoFinanceiro.pagarFuncionario(funcionarios[3]);
