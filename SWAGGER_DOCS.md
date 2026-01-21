# API de Tarefas - Documentação Swagger

## Instalação do Swagger

O Swagger foi implementado com sucesso na API de Tarefas. Foram instalados os seguintes pacotes:

- **swagger-ui-express**: Interface visual para documentação das APIs
- **swagger-jsdoc**: Gerador de especificação Swagger/OpenAPI a partir de comentários JSDoc

## Como acessar a documentação

1. **Inicie o servidor**:
   ```bash
   npm run dev
   ```

2. **Abra o navegador** e acesse:
   ```
   http://localhost:3000/api-docs
   ```

3. Você verá a interface do Swagger com toda a documentação dos endpoints

## Endpoints disponíveis

### GET /tarefas
- Obtém todas as tarefas cadastradas
- Resposta: Array de tarefas

### GET /tarefas/:id
- Obtém uma tarefa específica pelo ID
- Parâmetro: `id` (integer)
- Resposta: Objeto de uma tarefa

### POST /tarefas
- Cria uma nova tarefa
- Body: 
  ```json
  {
    "titulo": "string",
    "descricao": "string",
    "status": "pendente|em_progresso|concluída" (opcional)
  }
  ```

### PUT /tarefas/:id
- Atualiza uma tarefa completa
- Parâmetro: `id` (integer)
- Body: 
  ```json
  {
    "titulo": "string",
    "descricao": "string",
    "status": "pendente|em_progresso|concluída"
  }
  ```

### PATCH /tarefas/:id/status
- Atualiza apenas o status de uma tarefa
- Parâmetro: `id` (integer)
- Body: 
  ```json
  {
    "status": "pendente|em_progresso|concluída"
  }
  ```

### DELETE /tarefas/:id
- Deleta uma tarefa
- Parâmetro: `id` (integer)

## Estrutura de uma Tarefa

```json
{
  "id": 1,
  "titulo": "Nome da tarefa",
  "descricao": "Descrição detalhada",
  "status": "pendente",
  "createdAt": "2025-01-20T10:00:00Z",
  "updatedAt": "2025-01-20T10:00:00Z"
}
```

## Arquivos modificados/criados

- **src/config/swagger.js** - Configuração do Swagger
- **src/app.js** - Integração do Swagger com Express
- **src/routes/tarefasRoute.js** - Documentação JSDoc dos endpoints
- **package.json** - Novas dependências adicionadas

## Recursos da documentação

A documentação do Swagger inclui:
- ✅ Descrição detalhada de cada endpoint
- ✅ Parâmetros obrigatórios e opcionais
- ✅ Schemas de requisição e resposta
- ✅ Códigos de status HTTP
- ✅ Exemplos de uso
- ✅ Interface interativa para testar endpoints
