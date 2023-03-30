# Page-books

Página de gêneros literários:

Página e apresentação dos requisitos e funcionalidades descritas abaixo: 

Página principal (Listas de gêneros):
Mostra o conjunto de listas provenientes da API books do NYT. Através do endpoint: 
https://api.nytimes.com/svc/books/v3/lists/names.json 

O endpoint retorna todos os itens, no entanto o conteúdo é paginado na aplicação, exibindo (5) por vez. 

Sendo possível mudar a forma de exibição de cards para itens através de um ícone no topo.

A paginação é dinâmica, de forma que a numeração deve corresponder com a quantidade total de itens retornados da listagem da API. 

Cada item contém as seguintes informações: 
Nome da listagem 
Frequência de atualização 
Datas do último publicado e o mais antigo 
Cada item é um link para a listagem de livros do gênero.

## 💻 Tecnologias utilizadas

Para o desenvolvimento deste site utilizei as seguintes tecnologias:

* Visual Studio Code (Editor de código);

* HTML;

* JavaScript;

* CSS;

* React;

* Typescript;

### 💻 Run Web Project

```bash
# Install Dependencies
$ yarn install or npm install

# Run Aplication
$ yarn start or npm start 
```
Go to http://localhost:3000/ to see the result.
