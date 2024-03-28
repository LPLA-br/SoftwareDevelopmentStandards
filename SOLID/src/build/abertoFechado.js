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
/* Especifica-se inicialmente um retângulo.
 * Posteriormente exigiram para circulo
 * adicionaste atributo raio e condicional
 * seletora de lógica em calcularArea() ...
 * Uma semanda depois tua classe têm N
 * elementos geométricos em um verdadeiro CAUS !
 * Se tás fugindo da extenção então tás fazendo modificação !
 * */
class FormaGeometrica {
    constructor(alt, larg, ra, tipo) {
        this.altura = alt;
        this.largura = larg;
        this.raio = ra;
        this.tipo = tipo;
    }
    calcularArea() {
        switch (this.tipo) {
            case "cubo":
            case "retangulo":
                return this.altura * this.largura;
            case "circulo":
                return Math.PI * (this.raio * this.raio);
            default:
                return 0;
        }
    }
}
;
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
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }
}
;
