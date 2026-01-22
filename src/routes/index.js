const express = require('express');
const tarefas = require('./tarefasRoute.js');

module.exports = (app) => {
    // Rota inicial - apresentação do projeto
    app.get('/', (req, res) => {
        res.status(200).json({
            message: 'Bem-vindo à API de Tarefas',
            version: '1.0.0',
            description: 'API para gerenciar tarefas',
            author: 'Fabyola da Silva Campos',
            email: 'fabyolacampos.dev@gmail.com',
            endpoints: {
                documentation: 'https://api-taskss.onrender.com/api-docs',
                tarefas: '/tarefas'
            },
            features: [
                'Criar tarefas',
                'Listar todas as tarefas',
                'Buscar tarefa por ID',
                'Atualizar tarefa completa',
                'Atualizar apenas o status',
                'Deletar tarefa'
            ]
        });
    });

    app.use(tarefas);
};