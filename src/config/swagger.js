const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Tarefas',
      version: '1.0.0',
      description: 'API para gerenciar tarefas',
      contact: {
        name: 'Fabyola da Silva Campos',
        email: 'fabyolacampos.dev@gmail.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de Desenvolvimento'
      }
    ],
    components: {
      schemas: {
        Tarefa: {
          type: 'object',
          required: ['titulo', 'descricao'],
          properties: {
            id: {
              type: 'integer',
              description: 'ID da tarefa'
            },
            titulo: {
              type: 'string',
              description: 'Título da tarefa'
            },
            descricao: {
              type: 'string',
              description: 'Descrição da tarefa'
            },
            status: {
              type: 'string',
              enum: ['pendente', 'em_progresso', 'concluída'],
              description: 'Status da tarefa'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data de criação'
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data de atualização'
            }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
