# 🚀 Backend – API de Tarefas (Dev Tasks)

API REST desenvolvida em **Node.js** para gerenciamento de tarefas, seguindo boas práticas de arquitetura, padrão MVC e documentação com Swagger.  
Este backend é consumido por uma aplicação frontend separada.

🔗 **Frontend:** https://dev-taskss.vercel.app  
🔗 **Backend:** https://api-taskss.onrender.com  
📄 **Swagger:** https://api-taskss.onrender.com/api-docs

---

## 🎨 Repositório do Front-end

<a href="https://github.com/fabyolafc/dev-tasks"><img width="282" src="https://denvercoder1-github-readme-stats.vercel.app/api/pin/?username=fabyolafc&repo=dev-tasks&theme=tokyonight" alt="dev-tasks"></a>

---

## 📌 Funcionalidades

- Criar tarefas
- Listar todas as tarefas
- Buscar tarefa por ID
- Atualizar tarefas (PUT e PATCH)
- Deletar tarefas
- Documentação interativa com Swagger
- Controle de acesso via CORS

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript
- **Express.js** – Framework para criação da API
- **Sequelize** – ORM para banco de dados
- **SQLite** – Banco de dados relacional leve
- **MySQL2** – Driver para MySQL (opcional/produção)
- **CORS** – Controle de acesso entre domínios
- **Swagger** – Documentação da API
- **Dotenv** – Variáveis de ambiente
- **Nodemon** – Reload automático em desenvolvimento

---

## 🌐 CORS – Segurança

A API aceita requisições apenas do frontend autorizado:

```js
app.use(cors({
  origin: "https://dev-taskss.vercel.app",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));
