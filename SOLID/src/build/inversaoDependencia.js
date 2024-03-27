"use strict";
/* simples exemplos de Acomplamentos
 * LPLA-br 23/3/24
 *
  INVERSÃO DE DEPENDÊNCIA | DEPENDENCE INVERSION PRINCIPLE (soliD)
  (não possível sem mecanismo de polimorfismo)  "classes não devem
  ser acopladas a outras classes concretas ou a classes que possam
  ser instânciadas."  "Módulos de alto nível não devem depender de
  módulos de baixo nível.  Ambos devem depender de abstrações."
  "sistemas mais flexíveis são aqueles em que as as dependências
  de de código fonte se referem apenas as abstrações e não a
  itens concretos"
  A abstração sobredita comumente manifesta-se como:
   classes abstratas ou interfaces
  Classes concretas estáveis são dependências confiáveis
  onde temos, por exemplo: String, Math dentre outras presentes em
  bibliotecas padrão de várias linguagens.
 * */
// classes representantes de estruturas de dados.
class Produto {
    constructor(preco) {
        this.preco = preco;
    }
    getPreco() {
        return this.preco;
    }
}
;
/** Um pedido contém N produtos. */
class Pedido {
    constructor() {
        this.pedido = [];
        //gera 10 produtos de preço aleatório.
        let preco = this.getRandomArbitrary(10, 100);
        for (let i = 0; i < 10; i++) {
            this.pedido.push(new Produto(preco));
            preco = this.getRandomArbitrary(10, 100);
        }
    }
    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    getPedido() {
        return this.pedido;
    }
}
;
// entendendo a inversão de dependência
// IMPLEMENTAÇÃO MUITO ACOPLADA.
let grupoPedidos = [new Pedido()];
function obterProdutos(pedidoId) {
    return grupoPedidos[pedidoId].getPedido();
}
function calcular(pedidoId) {
    let produtos = obterProdutos(pedidoId);
    let precoTotal = 0;
    for (let i = 0; i < produtos.length; i++) {
        precoTotal += produtos[i].getPreco();
    }
    return precoTotal;
}
function gerarNotaFiscal(pedidoId) {
    return `SUPERMERCADO FDS: total: ${calcular(pedidoId)}`;
}
gerarNotaFiscal(0);
/*mudanças nas funções podem quebrar a ligação interfunção
as por em classes resultará em praticamente
nenhuma mudança no status quo.*/
/*  -Acomplamentos concretos sempre existirão!
    evite dependências voláteis.
*/
