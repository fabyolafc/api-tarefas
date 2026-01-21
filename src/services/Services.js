const dataSource = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros () {
    return dataSource[this.model].findAll();
  }

  async pegaUmRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async criaRegistro(dadosDoRegistro) {
    return dataSource[this.model].create(dadosDoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, id) {
    const listadeRegistrosAtualizados = await dataSource[this.model].update(dadosAtualizados, {
      where: { id: id }
    });
    const updatedCount = Array.isArray(listadeRegistrosAtualizados) ? listadeRegistrosAtualizados[0] : listadeRegistrosAtualizados;
    if (updatedCount === 0) {
      return false;
    }
    return true;
  }

  async atualizaStatus(status, id) {
    const registro = await dataSource[this.model].findByPk(id);
    if (!registro) return false;
    registro.status = status;
    await registro.save();
    return true;
  }

  async atualizaCampos(dadosAtualizados, id) {
    const registro = await dataSource[this.model].findByPk(id);
    if (!registro) return false;
    Object.keys(dadosAtualizados).forEach((key) => {
      registro[key] = dadosAtualizados[key];
    });
    await registro.save();
    return true;
  }

  async excluiRegistro(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;
