class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistro);
    } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao buscar registros' });
    }
  }

  async pegaUmPorId(req, res) {
    const { id } = req.params;
    if (isNaN(Number(id))) {
      return res.status(400).json({ mensagem: 'ID inválido' });
    }
    try {
      const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
      if (!umRegistro) {
        return res.status(404).json({ mensagem: 'Registro não encontrado' });
      }
      return res.status(200).json(umRegistro);
    } catch (erro) {
      res.status(500).json({ mensagem: 'Erro ao buscar o registro' });
    }
  }

  async criaNovo(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
      return res.status(200).json(novoRegistroCriado);
    } catch (erro) {
      if (erro && (erro.name === 'SequelizeValidationError' || erro.name === 'SequelizeUniqueConstraintError')) {
        const mensagens = erro.errors ? erro.errors.map(e => e.message) : [erro.message];
        return res.status(400).json({ erros: mensagens });
      }
      return res.status(500).json({ mensagem: 'Erro ao criar o registro' });
    }
  }

  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.atualizaCampos(dadosAtualizados, Number(id));
      if (!foiAtualizado) {
        return res.status(400).json({ mensagem: 'registro não foi atualizado' });
      }
      return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
    } catch (erro) {
      if (erro && (erro.name === 'SequelizeValidationError' || erro.name === 'SequelizeUniqueConstraintError')) {
        const fieldErrors = {};
        if (erro.errors && Array.isArray(erro.errors)) {
          erro.errors.forEach(e => {
            const field = e.path || e.instance || 'campo';
            fieldErrors[field] = fieldErrors[field] || [];
            fieldErrors[field].push(e.message);
          });
        }
        return res.status(400).json({ erros: fieldErrors });
      }
      res.status(500).json({ mensagem: 'Erro ao atualizar o registro' });
    }
  }

  async atualizaStatus(req, res) {
  const { id } = req.params;
  const { status } = req.body;
  try {
    if (!status) {
      return res.status(400).json({ mensagem: 'Status é obrigatório' });
    }
    const foiAtualizado = await this.entidadeService.atualizaStatus(status, Number(id));
    if (!foiAtualizado) {
      return res.status(400).json({ mensagem: 'registro não foi atualizado' });
    }
    return res.status(200).json({ mensagem: 'Status atualizado com sucesso' });
  } catch (erro) {
    if (erro && (erro.name === 'SequelizeValidationError' || erro.name === 'SequelizeUniqueConstraintError')) {
      const mensagens = erro.errors ? erro.errors.map(e => e.message) : [erro.message];
      return res.status(400).json({ erros: mensagens });
    }
    res.status(500).json({ mensagem: 'Erro ao atualizar o status' });
  }
}

  async exclui(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.excluiRegistro(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      res.status(500).json({ mensagem: 'Erro ao excluir o registro' });
    }
  }
}

module.exports = Controller;
