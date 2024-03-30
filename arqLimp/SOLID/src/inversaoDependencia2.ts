// inversão de dependência
// injeção de dependência (via construtor)
// códigofontetv

// INTERFACES ABSTRATAS

interface IAutenticador
{
  autenticar( login:string, senha:string ): boolean ;
};

interface IUsuarioRepositorio
{
  salvarUsuarioAutenticado( login:string ): void ;
};

// CLASSES CONCRETAS

class Autenticador implements IAutenticador
{
  public autenticar( login:string, senha:string ): boolean
  {
    console.log( "autenticacao" );
    return true;
  }
};

class GoogleAutenticador implements IAutenticador
{
  public autenticar( login:string, senha:string ): boolean
  {
    console.log( "G O O G L E" );
    return true;
  }
};

class UsuarioRepositorio
{
  salvarUsuarioAutenticado( login:string ): void
  {
    console.log( "INSERT INTO usuarios VALUE (...);" );
  }
}

class AuthControlador
{
  private autenticador: IAutenticador;
  private usuarioRepositorio: IUsuarioRepositorio;

  //injeção via construtor. Depende de interface abstrata.
  constructor( autenticador: IAutenticador, usuarioRepo: IUsuarioRepositorio )
  {
    this.autenticador = autenticador;
    this.usuarioRepositorio = usuarioRepo ;
  }

  public login( login:string, senha:string ): boolean
  {
    if ( this.autenticador.autenticar( login, senha ) )
    {
      this.usuarioRepositorio.salvarUsuarioAutenticado( login );
      return true;
    }
    return false;
  }
}

// INJEÇÃO NA PRÁTICA

const autenticador = new Autenticador();
const usuarioRepo = new UsuarioRepositorio();

const autenticaControlador = new AuthControlador( autenticador, usuarioRepo );

