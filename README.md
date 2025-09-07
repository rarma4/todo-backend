# Todo Backend

Backend API para aprendizado de desenvolvimento de APIs e banco de dados. Este projeto fornece endpoints RESTful para gerenciamento de tarefas (todos) e serve como base para o frontend todo-frontend.

## 📋 Sobre o Projeto

Este é um backend educativo desenvolvido para demonstrar conceitos fundamentais de:
- Desenvolvimento de APIs REST
- Integração com banco de dados
- Autenticação e autorização
- Validação de dados
- Estruturação de projetos Node.js

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Prisma** - ORM para banco de dados
- **SQLite/PostgreSQL** - Banco de dados

## 📁 Estrutura do Projeto

```
todo-backend/
├── prisma/           # Configuração do banco de dados
├── routes/           # Definição das rotas da API
├── server.js         # Arquivo principal do servidor
└── package.json      # Dependências do projeto
```

## 🔧 Instalação e Configuração 

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd todo-backend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o banco de dados:
```bash
npx prisma generate
npx prisma db push
```

4. Execute o servidor:
```bash
npm start
```

## 📚 Endpoints da API

### Tarefas (Todos)
- `GET /api/todos` - Listar todas as tarefas
- `POST /api/todos` - Criar nova tarefa
- `PUT /api/todos/:id` - Atualizar tarefa
- `DELETE /api/todos/:id` - Excluir tarefa

## 🔗 Integração com Frontend

Este backend foi desenvolvido para trabalhar em conjunto com o projeto **todo-frontend**, fornecendo uma API completa para gerenciamento de tarefas.

## 📖 Aprendizado

Este projeto é ideal para:
- Estudantes de programação
- Desenvolvedores iniciantes
- Quem quer aprender sobre APIs REST
- Entendimento de integração frontend/backend

## 🤝 Contribuição

Contribuições são bem-vindas! Este é um projeto educacional, então sinta-se à vontade para sugerir melhorias ou reportar problemas.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
