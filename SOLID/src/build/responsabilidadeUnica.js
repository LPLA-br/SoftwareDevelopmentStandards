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
