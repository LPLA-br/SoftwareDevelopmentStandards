"use strict";
/* Aberto fechado
 "Um artefato de software deve ser aberto para extensão,
 mas fechado para modificação" (extender sem modificar)

 Aplica-se Responsabilidade única para cada ator do minimundo
 e depois a inversão de dependência para evitar acoplamentos
 extremos entre classes concretas. Porfim tem-se a necessidade
 de fazer a aplicação adaptar-se a novas demandas advindas dos
 atores
 */
;
class Retangulo {
    constructor(alt, larg) {
        this.altura = alt;
        this.largura = larg;
    }
    calcularArea() {
        return this.altura * this.largura;
    }
}
;
let listaObjetos = [new Retangulo(10, 15)];
console.log(listaObjetos[0].calcularArea());
