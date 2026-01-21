'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarefa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tarefa.init({
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "O título não pode ser vazio" },
      },
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("a fazer", "em andamento", "concluída"),
      allowNull: false,
      defaultValue: "a fazer",
      validate: {
        isIn: {
          args: [["a fazer", "em andamento", "concluída"]],
          msg: 'Status inválido. Valores permitidos: a fazer, em andamento, concluída'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Tarefa',
    tableName: 'tarefas'
  });
  return Tarefa;
};