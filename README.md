<h1>Car shop</h1>
<p>Este projeto foi desenvolvido em janeiro de 2023 durante meus estudos na <a href="https://www.betrybe.com/">Trybe</a>.</p>

<br/>

<h2>Guia de instalação</h2> 
<ol>
  <li>
    <p>Clone o repositório</p>
    <pre>git clone git@github.com:celso-rodrigo/car-shop.git</pre>
  </li>
  <li>
    <p>Abra a pasta do repositório</p>
  </li>
  <li>
    <p>Instale as dependências</p>
    <pre>npm install</pre>
  </li>
  <li>
    <p>Preencha e renomeie o arquivo ".env.example" para ".env"</p>
  </li>
  <li>
    <p>Inicie o projetot</p>
    <pre>npm run dev</pre>
  </li>
</ol>

<br/>

<h2>O quê foi desenvolvido</h2>
<p>Com a ODM Mongoose e POO foi desenvolvida uma API para gerenciamento de uma concessionária de veículos.<p>
<br/>
  
<h2>O quê foi avaliado</h2>
<ul>
  <li>Conhecimento dos pilares da Programação Orientada a Objetos: Herança, Abstração, Encapsulamento e Polimorfismo;</li>
  <li>Utilização de Composição;</li>
  <li>Criação e utilização de Interfaces;</li>
  <li>Implementação em TypeScript de Classes, Instâncias, Atributos, Métodos e Objetos;</li>
  <li>Aplicação dos conhecimentos de MongoDB, Typescript e POO para criar uma API com CRUD</li>
</ul>

<br/>

<h2>Endpoints</h2>

<h3>/cars</h3>

| Método | Função | Corpo |
|---|---|---|
|GET| Retorna todos os carros | |
|POST| Cadastra carro | { "model": string, "year": number, "color": string, "status": bool, "buyValue": number, "doorsQty": number, "seatsQty": number } |

<h3>/cars/:id</h3>

| Método | Função | Corpo |
|---|---|---|
|GET| Retorna carro com base no id | |
|PUT| Atualiza carro com base no id | { "model": string, "year": number, "color": string, "status": bool, "buyValue": number, "doorsQty": number, "seatsQty": number } |

<h3>/motorcycles</h3>

| Método | Função | Corpo |
|---|---|---|
|GET| Retorna todas as motos | |

<h3>/motorcycles/:id</h3>

| Método | Função | Corpo |
|---|---|---|
|GET| Retorna moto com base no id | |
|PUT| Atualiza moto com base no id | { "model": string, "year": number, "color": string, "status": bool, "buyValue": number, "category": string, "engineCapacity": number } |

<hr />

<br/>

<h2>Requisitos</h2>
<ul>
  <h4>Obrigatórios</h4>
  <li>:heavy_check_mark:  Crie a rota /cars onde seja possível cadastrar um carro;</li>
  <li>:heavy_check_mark:  Crie o endpoint para listar carros;</li>
  <li>:heavy_check_mark:  Escreva testes para cobrir 30% da camada de Service;</li>
  <li>:heavy_check_mark:  Crie a rota /cars/:id onde seja possível atualizar um carro por ID;</li>
  <li>:heavy_check_mark:  Crie a rota /motorcycles onde seja possível cadastrar uma moto;</li>
  <li>:heavy_check_mark:  Escreva testes para cobrir 60% da camada de Service;</li>
  <li>:heavy_check_mark:  Crie a rota /motorcycles onde seja possível listar motos.</li>
  <h4>Bônus</h4>
  <li>:heavy_check_mark:  Crie a rota /motorcycles/:id onde seja possível atualizar uma moto por ID;</li>
  <li>:heavy_check_mark:  Escreva testes para cobrir 80% da camada de Service.</li>
</ul>

