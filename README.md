# API backend - DSCatalog
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Romariorfr/dscatalog-devsuperior-aula/blob/master/LICENSE) 

## Sobre o projeto:

DScatalog é um projeto backend web contruido e aprimorado ao longo do bootcamp spring react 3.0, evento organizado pela [DevSuperior](https://devsuperior.com.br "Site da DevSuperior").

O projeto consiste na criação completa de um crud (Create, Read, Update, Delete) de produtos e categorias, usuario e funções.

## Modelo conceitual do projeto:

![Web 1](https://github.com/Romariorfr/dscatalog-devsuperior-aula/blob/master/backend/assets/modeloConceitual.jpg)


## Proposta do projeto:

Aprender a criar projeto Spring Boot, criar um monorespositório Git, organizar o projeto em camadas,criar entidades, perfis de projeto
seeding de base de dados, criar web serviçes REST, aplicar padrão DTO(Data Transfer Object), CRUD completo. Tratamento de exceções,
dados de auditoria e paginação de dados. Aprender também a trabalhar com a ferramenta Postman para testar as requisições.

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven


# Como rodar a aplicação na sua maquina


```bash
# clonar repositório
git clone https://github.com/Romariorfr/dscatalog-devsuperior-aula

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```


# Testes manuais no postman
## Requisições da classe Category

```bash
#Busca paginada de categorias
GET http://localhost:8080/categories?orderBy=id&page=0&linesPerPage=10

#Busca de categorias por id
GET http://localhost:8080/categories/1

#Inserir nova categoria
POST http://localhost:8080/categories

POST /clients
{
    "name" : "Garden"
}

#Atualizar uma categoria
PUT http://localhost:8080/categories/1

{
    "name" : "new name"
}

#Deletar uma categoria
DELETE http://localhost:8080/categories/1

```


## Requisições da classe Product

```bash
#Busca paginada de produtos
GET http://localhost:8080/products?orderBy=id&page=1&linesPerPage=10

#Busca de Produtos por id
GET http://localhost:8080/products/1

#Inserir novo produto
POST http://localhost:8080/products 

{
  "date": "2020-07-20T10:00:00Z",
  "description": "The new generation PS5 video game",
  "name": "PS5",
  "imgUrl": "",
  "price": 600.0,
  "categories": [
    {
      "id": 1
    },
    {
      "id": 3
    }
  ]
}


#Atualizar um produto
PUT http://localhost:8080/products/1

{
  "date": "2020-07-20T10:00:00Z",
  "description": "Updated product description",
  "name": "Updated product name",
  "imgUrl": "",
  "price": 600.0,
  "categories": [
    {
      "id": 1
    },
    {
      "id": 3
    }
  ]
}


#Deletar um produto
DELETE http://localhost:8080/products/1

```

# Autor

Romário Ferreira de Rezende

https://www.linkedin.com/in/romarioferreiradeveloper
