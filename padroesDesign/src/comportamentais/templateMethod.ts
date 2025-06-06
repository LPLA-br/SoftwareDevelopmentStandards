/* TEMPLATE METHOD
 *
 * Definir o esqueleto de um algoritmo em uma operação, postergando algums passos
 * internos às subclasses. Permite a dinamicidade de partes do algoritmo sem 
 * lhe mudar a estrutura.
 *
 * Classes herdeiras ou implementantes contém a implementação algoritmica concreta
 * dos métodos que tem funcionamento variável por domínio da solução.
 *
 * AbstractClass -
 *  Define operações primitivas abstratas que as subclasses concretas definem
 *  para implementar passos de um algoritmo.
 *  Implementa um método-template (modelo) que define o esqueleto de um algoritmo.
 *  O método template invoca operações primitivas, bem como operações definidas em
 *  AbstractClass.
 * ConcreteClass -
 *  Implementa as operações primitivas para execução de passos específicos em
 *  algoritmos.
 *
 *  Quebre um algoritmo em uma série de etapas, transforme as etapas em métodos
 *  e coloque uma série de chamadas para esses métodos.
 * */

import { readFileSync, writeFileSync } from "node:fs";

const caminho = "/tmp/f";
writeFileSync(caminho, "template method");

// Leitor cuja a forma de ler o arquivo é algoritmamente diferente
abstract class ALeitorArquivo
{
  protected file: Buffer | undefined;

  constructor()
  {
    this.file = undefined;
  }

  public carregarArquivo( path: string ): void
  {
    this.file = readFileSync( path );
  }

  public arquivoCarregado(): void
  {
    if ( this.file === undefined ) throw new Error("ARQUIVO NÃO CARREGADO !!!");
  }

  //TEMPLATE METHOD
  abstract lerArquivo(): string | object;
};



class LeitorTxt extends ALeitorArquivo
{
  public lerArquivo(): string | object
  {
    this.arquivoCarregado();
    //@ts-ignore
    return this.file.toString();
  }
}

class LeitorParaJSON extends ALeitorArquivo
{
  public lerArquivo(): string | object
  {
    this.arquivoCarregado();
    //@ts-ignore
    return this.file.toJSON();
  }
}

class LeitorHexadecimal extends ALeitorArquivo
{
  public lerArquivo(): string | object
  {
    this.arquivoCarregado();
    let res: string = "";
    let contador16 = 0;
    //@ts-ignore
    for ( let i = 0; i < this.file.length; i++ )
    {
      if ( contador16 == 16 )
      {
        res = res.concat('\n');
        contador16 = 0;
      }
      //@ts-ignore
      res = res.concat( " ", this.file[i].toString(16) );
      contador16++;
    }
    return res;
  }
}

/// CÓDIGO CLIENTE

try
{
  const txt = new LeitorTxt();
  const json = new LeitorParaJSON();
  const hex = new LeitorHexadecimal();

  txt.carregarArquivo( caminho );
  json.carregarArquivo( caminho );
  hex.carregarArquivo( caminho );

  console.log( txt.lerArquivo() );
  console.log( json.lerArquivo() );
  console.log( hex.lerArquivo() );
}
catch( err )
{
  console.log("TENTARAM ME DERRUBAR AQUI RAPÁ !!", err);
}
