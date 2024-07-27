# MODELO GENÉRICO PARA MACROESTRUTURA DE DIRETÓRIOS EM PROJETOS DE SOFTWARE

Embora cada tecnologia de implementação traga suas especificidades
na organização de diretórios. Têm-se uma lista seleta dos mais
comuns que de forma padrão frequentemente aparecem na estrutura de
diretório de qualquer projeto de software. Podes usar este modelo
como um <i>insight</i> para organização do teu projeto.


## CONVENÇÕES COMUNS ESPECÍFICAS DE ALGUMAS FORMAS IMPLEMENTACIONAIS:

Projetos com controle de versionamento por git:
.gitignore - ignorar arquivos que não precisam ser gerenciados pelo git

Projetos C/C++:
makefile - arquivo com instruções de compilação do código fonte via make(1) (vide manpage)

Projetos Java/Maven:
Pom.xml - contém metadadados sobre o projeto gerenciáveis sob o maven.

Projetos javascript:
package.json - metadadados do projeto, scripts de controle via npm e informações sobre dependências.
package-lock.json - especificação de travas de versão de dependências.
node\_modules - módulos com vários objetos úteis para finalidade do projeto.

Projetos PHP:
composer.json - funciona de maneira análoga ao package.json
composer.lock - funciona de maneira análoga ao package-lock.json

NOTA: Consulte a documentação das ferramentas empregáturas para adequação deste modelo genérico
às especificidades de cada.

```
projeto
|_src  - código fonte do projeto com organização variável dependendente da tecnologia empregada.
| |_subdiretórios - aqui a organização varia conforme: tipo da aplicação, arquitetura e padrões e etc...
|_test - implementação de testes.
|_docs - documentação para usuários finais e/ou para programadores.
|_lib  - bibliotecas, programas, rotinas, scripts, funções referenciadas em src (C/C++ commonly)
|_modules - possui modulos que contém vários classes/objetos úteis ao projeto.
|_bin  - executáveis instaláveis em /usr/bin (C/C++ commonly)
|_assets - arquivos estáticos como: imagens, vídeos, audios e fontes.
|_config - contém arquivos que alteram parâmetros globais da aplicação modificando seu funcionamento.
|_logs - recebe a saída dos logs da aplicação executante.
|_models - Contém modelos do projeto ou de dados e migrações em aplicações sem Object Relational Mapper.
|_data - aplicação com dados locais (banco de dados locais) podem por as databases neste diretório.

README.md - introduz o usuário/desenvolvedor ao projeto.
LICENSE.md - licensa de uso do projeto (restrições e liberdades).
CONTRIBUTING.md - orientações de como contribuir.

```

## FONTES BIBLIOGRÁFICAS E INFORMACIONAIS:

<a href="https://medium.com/@deshayk/programming-101-file-structures-2e4699ac0fc2"> programming 101: File Structures </a>
<a href="https://www.dimins.com/online-help/workbench/71/projects/default-dir-structure.html"> Default folder structure </a>
<a href="https://dokuwiki.hampel-soft.com/code/common/project-structure"> 11 Project Structure </a>

<small> Nunca deixe de consultar <span>atentamente</span> livros ou documentações antes de agir. </small>
