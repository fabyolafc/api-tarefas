const express = require('express');
const tarefas = require('./tarefasRoute.js');

module.exports = (app) => {
        app.use(express.json(), tarefas,
    );
};