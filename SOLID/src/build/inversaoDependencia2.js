"use strict";
// inversão de dependência
// injeção de dependência (via construtor)
// códigofontetv
;
;
// CLASSES CONCRETAS
class Autenticador {
    autenticar(login, senha) {
        console.log("autenticacao");
        return true;
    }
}
;
class GoogleAutenticador {
    autenticar(login, senha) {
        console.log("G O O G L E");
        return true;
    }
}
;
class UsuarioRepositorio {
    salvarUsuarioAutenticado(login) {
        console.log("INSERT INTO usuarios VALUE (...);");
    }
}
class AuthControlador {
    //injeção via construtor. Depende de interface abstrata.
    constructor(autenticador, usuarioRepo) {
        this.autenticador = autenticador;
        this.usuarioRepositorio = usuarioRepo;
    }
    login(login, senha) {
        if (this.autenticador.autenticar(login, senha)) {
            this.usuarioRepositorio.salvarUsuarioAutenticado(login);
            return true;
        }
        return false;
    }
}
// INJEÇÃO NA PRÁTICA
const autenticador = new Autenticador();
const usuarioRepo = new UsuarioRepositorio();
const autenticaControlador = new AuthControlador(autenticador, usuarioRepo);
