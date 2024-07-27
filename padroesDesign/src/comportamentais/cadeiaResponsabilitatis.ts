/*******************************
 * CADEIA DE RESPONSABILIDADE
 * Evitar acoplamento remetente/
 * receptor dando oportunidade a
 * mais de um objeto para tratar
 * a solicitação.
 * Objetos em cadeia onde a solicitação
 * flui até chegar em um tratador.
 * Exemplo abstrato: máquina de moedas
 * com entrada que permite todas
 * mas com roteamento de moeda por
 * tamanho para o receptáculo certo.
 *
 * Participantes:
 * Handler - Define interface para tratar solicitações.
 *           opcionalmente implementa o elo (link) ao sucessor.
 * ConcreteHandler - trata solicitações pelas quais é responsável.
 *                   pode acessar seu sucessor.
 *                   se o ConcreteHandler pode tratar a solicitação, ele assim o faz; caso
 *                   contrário, ele repassa a solicitação para o seu sucessor.
 * Cliente - inicia a solicitação para um objeto ConcreteHandler da cadeia.
 *
 * Colaboração:
 * Cliente emite solicitação que propaga-se na cadeia até
 * um ConcreteHandler a assumir e tratar.
 *******************************/

interface IManipulador
{
}

class Repositorio implements IManipulador
{
}

class Cliente
{
}


