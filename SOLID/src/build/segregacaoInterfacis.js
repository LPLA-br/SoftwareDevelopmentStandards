"use strict";
/* PRINCÍPIO DA SEGREGAÇÃO DE INTERFACE */
/* Clientes não devem ser forçados a dependerem de métodos que não usam.
* Programaticamente interfaces grandes são quebradas em partes garantindo
* que classes de implementação só terão o necessário. */
;
class Demo1 {
    criarPost() {
        console.log("edit> |");
    }
    /*classe: fui obrigado a implementar esse excremento
      abaixo ! Nem preciso dessa porcaria aqui !!!! */
    readPost() { }
}
;
;
;
class Demo2 {
    constructor() { }
    criarPost() {
        console.log("edit> |");
    }
    readPost() {
        console.log("Quem quer o aviãozinho ?!?");
    }
}
;
