
interface INumerosAleatoriosLimitados
{
  numeroAleatorioLimite( max:number, min:number ): number;
};

class Randomizador implements INumerosAleatoriosLimitados
{
  public numeroAleatorioLimite( max:number, min:number ): number
  {
    return Math.random() * (max - min) + min;
  }
};

interface IPacote
{
  identidade: string;
  preco: number;
};

class Pacote implements IPacote
{
  identidade: string;
  preco: number;
  randomizador: INumerosAleatoriosLimitados;

  constructor( identidade: string, preco: number, randomizador: INumerosAleatoriosLimitados )
  {
    this.randomizador = randomizador;
    this.identidade = (!identidade) ? ("") : (randomizador.numeroAleatorioLimite( 0, 999 ).toString());
    this.preco = (!preco) ? (0) : (preco);
  }

  public get getIdentidade(): string
  {
    return this.identidade;
  }

  public get getPreco(): number
  {
    return this.preco;
  }

  public set setPreco( novoPreco: number )
  {
    this.preco = novoPreco;
  }

};

class Solicitacao
{
  protected pacotes: IPacote[];

  constructor( pacotes: IPacote[] )
  {
    this.pacotes = pacotes;
  }

  public adicionarPacote( pacote: IPacote )
  {
    try
    {
      this.pacotes.push( pacote );
    }
    catch( err )
    {
      console.log(err);
    }
  }

  public removerPacote( identidade: string )
  {
    try
    {
      for( let pacote = 0; pacote < this.pacotes.length; pacote++  )
      {
        if ( this.pacotes[ pacote ].identidade == identidade )
        {
          this.pacotes.splice( pacote, 1 );
        }
      }
    }
    catch( err )
    {
      console.log(err);
    }
  }

  public listarPacotes()
  {
    try
    {
      for( let pacote = 0; pacote < this.pacotes.length; pacote++ )
      {
        console.log( this.pacotes[ pacote ].identidade );
      }
    }
    catch(err)
    {
      console.log( err );
    }
  }
};

const r = new Randomizador();
const s = new Solicitacao( [ new Pacote('a',10,r), new Pacote('b',78,r) ] );

