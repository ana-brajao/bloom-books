# bloom-books

Página de gêneros literários:

Página e apresentação dos requisitos e funcionalidades descritas abaixo: 

Página principal (Listas de gêneros):
Mostra o conjunto de listas provenientes da API books do NYT. Através do endpoint: 
https://api.nytimes.com/svc/books/v3/lists/names.json 

O endpoint retorna todos os itens, no entanto o conteúdo deve ser paginado na aplicação, exibindo (5) por vez. 

No topo, deverá ser possível pesquisar o conteúdo da listagem por nome. A pesquisa deve ser realizada no objeto retornado da API. De forma a esconder o conteúdo que não corresponder com a pesquisa conforme o usuário digite. 

Sendo possível mudar a forma de exibição de cards para itens através de um ícone no topo.

A paginação deve ser dinâmica, de forma que a numeração deve corresponder com a quantidade total de itens retornados da listagem da API. 

Cada item contém as seguintes informações: 
Nome da listagem 
Frequência de atualização 
Datas do último publicado e o  mais antigo 
Cada item deve ser um link para a listagem de livros do gênero.
