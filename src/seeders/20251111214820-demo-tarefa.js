'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('tarefas', [
      {
        titulo: 'Estudar JavaScript',
        descricao: 'Revisar conceitos de funções, arrays e objetos.',
        status: 'a fazer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Praticar React',
        descricao: 'Criar um projeto simples com componentes e props.',
        status: 'em andamento',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Revisar Banco de Dados',
        descricao: 'Fazer consultas SQL no SQLite e revisar relacionamentos.',
        status: 'concluída',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tarefas', null, {});  
  }
};
