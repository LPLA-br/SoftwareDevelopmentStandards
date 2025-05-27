# CÓDIGO LIMPO

Fichamentos e anotações do Luiz acerca do Livro código limpo.

AFIXOS: PREFIXO-RAIZ-[INFIXO]-SUFIXO

## Use nomes que revelem seu propósito

```Java

class Empregado
{
    //protected int d;
    protected int tempoNaEmpresaEmDias;
    //protected String nm;
    protected String nome;
    //protected String pdc;
};

```

## Dados criados por classes ao invés de primitivos em prol da legibilidade

```Java
// Array<int>       Array de inteiros onde: 1=célula ocupada, 0=célula desocupada.
// 01000 matriz0
// 01001 matriz1
// 01000 matriz2

// Imagine um tabuleiro com células compondo cada linha para aumentar a
// compreensibilidade e legibilidade.
// Array<Celula>    array de objetos com significado e extensibilidade.

// célula compõe a linha que compõe o tabuleiro.
class Celula
{
    protected boolean ocupada;

    Celula( boolean estado )
    {
        this.estado = false;
    }

    public boolean estaOcupada()
    {
        return this.ocupada;
    }

    public boolean alterarEstadoDeOcupacao()
    {
        if( this.ocupada == false )
        {
            this.ocupada = true;
        }
        else
        {
            this.ocupada = false;
        }
    }

}

```

## Evite informações erradas, enganadoras, duplo sentido ou parecidas

Nomes de entidades famosas, termos técnicos ou nomes muito parecidos
devem ser evitados.

Exemplos Ruins:

- hipotenusa → hp
- planoDeContrato → pdc
- projecaoQuinzenalPeriodica → pqp
- financiamentoDuploPeriodico → fdp
- producaoNacionalComercial → pnc
- variacaoTensionalNotacionalCritica → vtnc

Muito parecidos:

- AlternarDirecaoSenoidalParaNorte
- AlterarDirecaoSenoidalParaNoroeste
- AlternarDirecaoSenoidalParaNorte
- AliviarDirecaoSenoidalParaNorte

O objetivo aqui e evitar a má interpretação.


## Use distinções significativas


Se não é possível determinar diferencas entre nomes em classes ou métodos
com certidão então tem-se um problema. Exemplos e correções:

- (a1, a2 → fonte, destino) em função de copiar string
- (n, p → nave, planete) em função de movimento gravitacional

nomes muito comuns e vagos
- ProductInfo
- productData

nomes indistintos que deixam dúvida:
- Cliente
- ClienteObjeto (Codificação)

Onde houver diferença os nomes distintos estarão lá para torna-la óbvia.


## Use nomes pronunciáveis


Certamente generationTimestamp e mais pronunciável que genymdhms.
pxne é melhor reconhecível como posicaoXNaveEspacial.
Comunicar-se com o time de desenvolvimento facilitar-se-á mais com
nomes assim.


## Use nomes buscáveis


Quanto menor for um nome de variável pior sera sua busca por
ferramentas como o grep(1) do linux nos fontes do projeto.
variáveis de uma letra são comumente empregadas em escopos pequenos
como dentro de um for de um método simples.

Atributo "quadranteCorrente" é mais buscável que "qr" na classe
Planeta.


## Evite codificações


Sobrecarga mental maior será comum em códigos com nomes codificados.
evite abreviações ou códigos tradutíveis apenas pelo dicionário
do projeto.


O autor mostra casos em que nomes, a exemplo de nomes
de interface, ganham prefixos ou sufixos para indicar abstrações ou
tipos ou padrões. Ele recomenda a não codificação.


## Evite mapeamento mental


'i' 'j' e 'k' são comumente usadas em iterações e são um padrão bem conhecido.
Entretanto evite criar mais mapeamentos para situações de lógica mais específica como:

- 'r'=raio
- "hp"=hipotenusa
- 'd'=diametro
- "dp"=diametroPlanetario
- "de"=diametroEstelar
- "px"="posicao x"
- "vx"="velocidade x"
- "ax"="aceleracao x".

Clareza aqui é fundamental.


## NOME DE CLASSE É SUBSTANTIVO


Substantivos que não tragam ideia de dinâmicidade (concretos).


- bons nomes (Substantivos)
    - Cliente
    - Conta
    - Cadeira
    - Pagina
- ruins
    - Correr (Verbo) (horrível)
    - Processador (Substantivo Agente)
    - Dados (Substantivo Plural)
    - Info (Substantivo Incompleto)

## NOME DE MÉTODO É VERBO INFINITIVO [[PREPOSIÇÕES] SEGUIDO DE SUBSTANTIVO(S)]

bonsExemplos:
- pagamento() → pagar()
- deposicao() → depositar();
- pagamentoReal() → pagarReais(); → pagarEmReais();

VERBOS SER,ESTAR,OBTER,DEFINIR is,is,get,set (padrão javabean)
- obterNome();
- definirNome();
- eDiretorio();
- estaEm();

O proprietário deste repositório defende o emprego de nomes em língua
Portuguesa para projetos sem colaboração internacional e de impacto
restrito ao escopo: estadual, nacional ou lusófono.

Sobrecarga de construtor → Métodos fábrica. Nome de função descreve parâmetro:
new Complex(23.6); → Complex.deNumeroReal(23.6);
Construtores correspondentes devem ser privados !

## Evite humor

- mandarUsuarioParaCasaDeChapeu() → deletarUsuario();
- irAoCartorioDenovo() → alterarNome();
- zeManeDisseBasta() → encerrarProcesso();
- criarCabeloBranco() → envelhecer();
- encherACarteira() → sacarQuantia();
- buscarAgulhaNoPalheiro() → buscarSequencialmente();


## O projeto deve ter adotado palavras por conceito


Espera-se que todos os métodos equivalentes em diferentes classes tenham
um nomes regulares padronizados. Maus exemplos para meios de transporte:

- Carro.darIgnicao();
- Aeronave.iniciarMotor();
- Foguete.iniciarQueima();
- Navio.ligarHelices();

Para, ignorando possíveis problemas de abstração, este:

- X.iniciarMotor();

Defina bem, no contexto do projeto, a semântica
de cada elemento léxico:

- Controller: Trata requisições http
- Repository: Define lógica de manipulação de dados permanentes
- Entity: Define regras de negócio

## (Inutilia Truncat) Evite trocadilhos

Uma palavra por conceito requer cuidado com a SEMÂNTICA (significado
exato) da operação representada pela palavra.

Uma mesma palavra com duas semânticas é horrível. Principalmente
se for em métodos imagina que adicionar() seja usado em uma classe para
adicionar objeto em uma lista interna e em outra para adicionar
parametros textuais de configuração.

- lista.adicionar( objeto );
- pilha.adicionar( objeto ); → empilhar( objeto );
- fila.adicionar( objeto ); → enfileirar( objeto );
- string.adicionar( string ); → concatenar( string ); → aglutinar( string );
- arvore.adicionar( ... ); → arvore.acoplarNoAoGalho();

## Use nomes a partir do DOMÍNIO DA SOLUÇÃO

Não pense que o domínio de negócios te obriga a omitir detalhes
de solução implementacional.

- root, raiz
- node, no
- branch, ramo
- usuarioComun
- filaDeTarefas
- grafoDeCidades
- arvoreDiretorios
- HashTableClientes

dentre outros podem ser empregados.

## Assim como use nomes do DOMÍNIO DO PROBLEMA

Gerência informacional dos feudos do reino:
Feudalismo: Feudo, Talha, Corveia, Banalidade, Senhor, Senhorio, Cavalheiro ...

## Adicione contexto significativo

Várias objetos podem possuir atributo nome.
ABSTRAÇÃO: OBJETO possui ATRIBUTO ? ATRIBUTO é propriedade de OBJETO ?
Como podemos contextualizar ?

Pessoa.nome
Empresa.nome
Construcao.nome

Estado existêncial ou estado subdivisão nacional ? 
prefixar:   pessoaFisicaNome
sufixar:    nomePessoaFisica
infixar:    pessoaNomeFisica (exemplo ruim kk)

Namespaces:

Republica::Estado
Monarquia::Provincia

## Cuidado com contextos desnecessários

-

# FUNÇÕES

