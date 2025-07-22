# 📚 BookFinder

**BookFinder** é um projeto simples que combina uma **API Node.js com Express** e um **frontend estático em HTML/JS**, permitindo buscar livros através da API pública da [Open Library](https://openlibrary.org/developers/api).

O projeto está dividido em duas partes:

- **Frontend**: hospedado no [GitHub Pages](https://abraao-reyys.github.io/bookfinder-api/) — interface simples de busca.
- **Backend/API**: hospedado no [Render](https://bookfinder-api-b784.onrender.com) — atua como intermediário entre o frontend e a OpenLibrary, realizando filtros e retornando apenas os dados relevantes.

## Justificativa

>  _Após realizar alguns exercícios iniciais com backend, decidi focar primeiro no desenvolvimento das minhas habilidades em frontend. Agora, como forma de reforçar e consolidar os conhecimentos básicos em construção e consumo de APIs, desenvolvi este projeto com uma abordagem simples e completa — integrando backend, filtros personalizados e consumo de uma API pública._

## Tecnologias

### Backend (API)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [CORS](https://expressjs.com/en/resources/middleware/cors.html)
- [Render](https://render.com/)
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)

### Frontend
- HTML5
- CSS3
- JavaScript Vanilla (fetch API)
- [GitHub Pages](https://pages.github.com/)

## Links de Produção

| Serviço     | URL                                                                 |
|-------------|----------------------------------------------------------------------|
| Frontend    | https://abraao-reyys.github.io/bookfinder-api/              |
| Backend API | https://bookfinder-api-b784.onrender.com                    |

##  Como Executar Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/abraao-reyys/bookfinder-api.git
cd bookfinder-api/backend
````

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar o servidor

```bash
node --watch server.js
```

A API ficará disponível em `http://localhost:3000/`.

## Parâmetros da API

### Endpoint

POST /

### Body (JSON)

```
{
  "search": "harry potter",
  "idiom": "eng",
  "available": "true",
  "year": 2000
}
```

## Funcionalidades da API

* Realiza busca na OpenLibrary com base no `search`
* Aplica filtros:

  * Idioma (`language`)
  * Disponibilidade (`ebook_access`)
  * Ano mínimo de publicação
* Retorna um JSON contendo os seguintes dados por livro:

  * Título
  * Autor(es)
  * Ano da primeira publicação
  * Status de disponibilidade
  * Idiomas disponíveis
  * Link para o livro na OpenLibrary

## Possíveis Melhorias Futuras

* Adicionar paginação
* Mais opções de filtros (por páginas, tipo, editora, etc.)
* Implementar cache com Redis
* Melhorar o tratamento e consistência do JSON de resposta
* Melhor UI/UX no frontend

## Autor

[@abraao-reyys](https://github.com/abraao-reyys)

## Licença

Este projeto está licenciado sob a MIT License.
