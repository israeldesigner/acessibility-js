# Biblioteca de acessibilidade
## Este documento especifica a aplicação front-end para reuso em toda Prefeitura de Fortaleza com relação a Acessibilidade

[![N|Solid](https://www.fortaleza.ce.gov.br/templates/pmf/images/logo-portal-prefeitura-fortaleza.png)](https://nodesource.com/products/nsolid) 
[![N|Solid](https://dados.fortaleza.ce.gov.br/base/assets/images/logo-citinovaBlack.png)


barra com efeito padrão para ser colocada a cima do header de qualquer site da PMF, baseado no modelo eMAG governo federal

- Acesso com ancôra a conteúdo central, header e footer
- Alto contraste 
- redimensionamento de fontes no site
- links da Prefeitura de fortaleza
- Vlibras widget para tradução de HTML para Libras


## Arquivos necessário
- Pasta CSS > fonts > vendor & arquivo main.css, 
- Pasta JS todos os arquivos
- html vLibras/ acessibilidade / script vLibras


## Âncoras
Acesskey trata do acesso aos 3 componentes principais de qualquer página HTML pelo teclado para melhorar a usabilidade
de pessoas que utilizam o teclado 

- ALT + 1 Leva ao conteúdo central tag <main> obrigatória no site
- ALT + 2 leva ao cabeçalho do projeto tag <header> obrigatória no site
- ALT + 3 leva ao rodapé tag <footer> obrigatória no site

>importante seguir a semântica HTML5 de estruturação so site

## Alto contraste
Alto contraste como modo de acessibilidade para facilitar a leitura de determinadas telas

- salvo em localstorage para mudança de página permanece o efeito
- importante logo marcas com fundo preto devem ser modificada dentro do próprio script

## Redimensionamento de fontes
muda o tamanha de fontes a cada clique do usuário

- A- diminui o font-size - 0.5px
- A  torna padrão  o font-size do site
- A+ Aumenta o font-size + 0.5px


## vLibras 
Inserir html dentro da tag body como primeiro elemento filho 
- script do vLibras abaixo de todos os scripts como último elemento filho do body

## Tecnologias para desenvolvimento de melhorias e Instalação
* [Node.js] (https://nodejs.org/)
* [SASS] (http://sass-lang.com/)
* [Gulp.js] (http://gulpjs.com/)
* [Javascript] (https://www.javascript.com/)


- Instalar node.js, gulp-cli instalar todas as dependências npm install e depois rodar gulp 
