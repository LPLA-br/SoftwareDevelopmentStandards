# CÓDIGO LIMPO

<p>
    Fichamentos e anotações do Luiz acerca do Livro código limpo.
</p>

<p>
    AFIXOS: PREFIXO-RAIZ-SUFIXO
<p>

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

<p>
    Nomes de entidades famosas, termos técnicos ou nomes muito parecidos
    devem ser evitados. Exemplos Ruins: hipotenusa → hp,  planoDeContrato → pdc
    projecaoQuinzenalPeriodica → pqp, Mui parecidos( AlternarDirecaoSenoidalParaNorte,
    AlterarDirecaoSenoidalParaNoroeste, AlternarDirecaoSenoidalParaNorte,
    AliviarDirecaoSenoidalParaNorte ... ).
</p>

<p>
    O objetivo aqui e evitar a má interpretação.
</p>

## Use distinções significativas

<p>
    Se não é possível determinar diferencas entre nomes em classes ou métodos
    com certidão então tem-se um problema. Exemplos e correções:
    (a1, a2 -> fonte, destino), nomes muito comuns e vagos(ProductInfo, productData)
    ,nomes indistintos que deixam dúvida (Cliente, ClienteObjeto)
    Onde houver diferença os nomes distintos estarão lá para torna-la óbvia.
</p>

## Use nomes pronunciáveis

<p>
    Certamente generationTimestamp e mais pronunciável que genymdhms.
    pxne é melhor reconhecível como posicaoXNaveEspacial.
    Comunicar-se com o time de desenvolvimento facilitar-se-á mais com
    nomes assim.
</p>

## Use nomes buscáveis

<p>
    Quanto menor for um nome de variável pior sera sua busca por
    ferramentas como o grep(1) do linux nos fontes do projeto.
    variáveis de uma letra são comumente empregadas e escopos pequenos
    como dentro de um for de um método simples.
</p>

## Evite codificações

<p>
    Sobrecarga mental maior será comum em códigos com nomes codificados.
    evite abreviações ou códigos tradutíveis apenas pelo dicionário
    do projeto.
</p>

## Evite mapeamento mental

<p>
    'i' 'j' e 'k' são comumente usadas em iterações e são um padrão.
    entretanto evite criar mais mapeamentos como: 'r'=raio 'hp'=hipotenusa
    'd'=diametro 'dp'=diametroPlanetario 'de'=diametroEstelar. Clareza é fundamental.
</p>

## NOME DE CLASSE É SUBSTANTIVO

<p>
    Substantivos que não tragam ideia de dinâmicidade (concretos).
    Bons: Cliente, Conta, Cadeira, Pagina. Ruins: Correr, Processador,
    Dados, Info
</p>

## NOME DE MÉTODO É VERBO

<p>
    pagamento() -> pagar(), deposicao() -> depositar();
</p>

## Evite humor

<p>
    mandarUsuarioParaCasaDeChapeu() -> deletarUsuario();
    irAoCartorioDenovo() -> alterarNome();
</p>

## O projeto deve ter adotado palavras por conceito

<p>
    Espera-se que todos os métodos equivalentes em diferentes classes tenham
    um nomes regulares padronizados. Mau Exemplo: Carro.ignicionarMotor();
    Aeronave.iniciarMotor(); Foguete.iniciarPropulsor(); Navio.ligarHelices(); que
    poderia ser simplemente X.iniciarMotor();
</p>

## (Inutilia Truncat) Evite trocadilhos

<p>
    Uma mesma palavra com duas semânticas é horrível. Principalmente
    se for em métodos imagina que add() seja usado em uma classe para
    adicionar objeto em uma lista interna e em outra para adicionar
    parametros textuais de configuração.
</p>

## Use nomes a partir do domínio da Solução

<p>
    Não evite o uso de termos de Informática pois és programador
    e te comunicas com outros programadores. Termos como: root, usuarioComun,
    filaDeTarefas, GrafoDeArquivos dentre outros podem ser empregados.
</p>

