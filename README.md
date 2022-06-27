<p align="center">
  <img src="https://github.com/enriquemolina61/Desafio-CRUD/blob/master/Molina.png?raw=true" width="250" title="hover text">
</p>

<h1 align="center">Molina Bicycles</h1>

<p align="center">Esse projeto consiste na criação de um CRUD para um estabelecimento de vendas de bicicletas, realizado como desafio de um processo seletivo. Onde foi pedido rotas para cadastro de bicicletas, vendas de bicicletas, alteração de preço das bicicletas cadastradas, filtragem por cor ou preço. Foi utilizado no projeto a linguagem Typescript, com Express, Sequelize como ORM. </p>


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/enriquemolina61/Desafio-CRUD>

# Instale as dependências
$ npm install

# Execute as migrations
$ npx sequelize-cli db:migrate

# Execute os Seeders
$ npx sequelize-cli db:seed:all

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```
