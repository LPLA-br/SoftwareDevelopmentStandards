/* STRATEGY
 * policy
 *
 * Definir uma familia de algoritmos, encapsular cada uma delas
 * e torná-las intercambiáveis. Strategy permite que o algoritmo
 * varie independente dos códigos cliente que os utilizam.
 *
 * Strategy -
 *  Define uma interface comum para todos os algoritmos suportados.
 *  Context usa esta interface para chamar o algoritmos definido por
 *  uma concrete strategy.
 * ConcreteStrategy -
 *  Implementa o algoritmo usando a interface de Strategy.
 * Context -
 *  É configurado com um objeto ConcreteStrategy.
 *  Mantém uma referência para um objeto Strategy.
 *  Pode definir uma interface que perimite a Strategy acessar seus dados.
 *
 * */

// Variando o algoritmo de aceleração

interface IMovimentoStrategy
{
  alterarPosicao( posicao: number, velocidade: number ): number
  alterarVelocidade( velocidade: number, aceleracao : number ): number
}


class MovimentadorInteiro implements IMovimentoStrategy
{
  public alterarPosicao( posicao: number, velocidade: number ): number
  {
    return Number( (posicao += velocidade).toFixed(0) );
  }

  public alterarVelocidade( velocidade: number, aceleracao: number ): number
  {
    return Number( (velocidade += aceleracao).toFixed(0) );
  }
}


class MovimentadorFlutuante implements IMovimentoStrategy
{
  public alterarPosicao( posicao: number, velocidade: number ): number
  {
    return posicao += velocidade;
  }

  public alterarVelocidade( velocidade: number, aceleracao: number ): number
  {
    return velocidade += aceleracao;
  }
}

class MovimentadorFlutuanteReverso implements IMovimentoStrategy
{
  public alterarPosicao( posicao: number, velocidade: number ): number
  {
    return posicao -= velocidade;
  }

  public alterarVelocidade( velocidade: number, aceleracao: number ): number
  {
    return velocidade -= aceleracao;
  }
}


// Contexto de atuação do strategy
class CorpoFisico
{
  private posicao: number;
  private velocidade: number;
  private aceleracao: number;
  private movimentador: IMovimentoStrategy;

  constructor(
    posicao:number,
    velocidade:number,
    aceleracao:number,
    movimentador: IMovimentoStrategy
  )
  {
    this.posicao = posicao;
    this.velocidade = velocidade;
    this.aceleracao = aceleracao;
    this.movimentador = movimentador;
  }

  public mover()
  {
    this.posicao = this.movimentador.alterarPosicao( this.posicao, this.velocidade );
  }

  public acelerar()
  {
    this.velocidade = this.movimentador.alterarVelocidade( this.velocidade, this.aceleracao );
  }

  public definirEstrategia( movimentador: IMovimentoStrategy )
  {
    this.movimentador = movimentador;
  }

  public obterPropriedadesEspaciais(): {posicao:number,velocidade:number,aceleracao:number}
  {
    return {
      posicao: this.posicao,
      velocidade: this.velocidade,
      aceleracao: this.aceleracao
    }
  }

}

const m = new CorpoFisico( 0, 1.7, 1.7, new MovimentadorFlutuante() );

for ( let i = 0; i <= 30; i++ )
{
  console.log( JSON.stringify( m.obterPropriedadesEspaciais() ) )

  m.mover()
  m.acelerar();

  // mudando de estratégia em tempo de execução
  if ( i == 10 )
  {
    console.log("OPA! MUDANDO ESTRATÉGIA ALGORITMICA");
    m.definirEstrategia( new MovimentadorInteiro() );
  }
  else if ( i == 20 )
  {
    console.log("OPA! MUDANDO ESTRATÉGIA ALGORITMICA");
    m.definirEstrategia( new MovimentadorFlutuanteReverso() );
  }
}
