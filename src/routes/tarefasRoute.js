const { Router } = require('express');
const tarefasController = require('../controllers/TarefaController.js');

const tarefaController = new tarefasController();
const router = Router();

/**
 * @swagger
 * /tarefas:
 *   get:
 *     summary: Obtém todas as tarefas
 *     description: Retorna uma lista de todas as tarefas cadastradas
 *     tags:
 *       - Tarefas
 *     responses:
 *       200:
 *         description: Lista de tarefas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tarefa'
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/tarefas', (req, res) => tarefaController.pegaTodos(req, res));

/**
 * @swagger
 * /tarefas/{id}:
 *   get:
 *     summary: Obtém uma tarefa por ID
 *     description: Retorna uma tarefa específica pelo seu ID
 *     tags:
 *       - Tarefas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa
 *     responses:
 *       200:
 *         description: Tarefa retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tarefa'
 *       404:
 *         description: Tarefa não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/tarefas/:id', (req, res) => tarefaController.pegaUmPorId(req, res));

/**
 * @swagger
 * /tarefas:
 *   post:
 *     summary: Cria uma nova tarefa
 *     description: Cria uma nova tarefa com os dados fornecidos
 *     tags:
 *       - Tarefas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - descricao
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título da tarefa
 *               descricao:
 *                 type: string
 *                 description: Descrição da tarefa
 *               status:
 *                 type: string
 *                 enum:
 *                   - pendente
 *                   - em_progresso
 *                   - concluida
 *                 description: Status inicial da tarefa
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tarefa'
 *       400:
 *         description: Dados inválidos fornecidos
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/tarefas', (req, res) => tarefaController.criaNovo(req, res));

/**
 * @swagger
 * /tarefas/{id}:
 *   put:
 *     summary: Atualiza uma tarefa completa
 *     description: Atualiza todos os dados de uma tarefa existente
 *     tags:
 *       - Tarefas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - descricao
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Novo título da tarefa
 *               descricao:
 *                 type: string
 *                 description: Nova descrição da tarefa
 *               status:
 *                 type: string
 *                 enum:
 *                   - pendente
 *                   - em_progresso
 *                   - concluida
 *                 description: Novo status da tarefa
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tarefa'
 *       400:
 *         description: Dados inválidos fornecidos
 *       404:
 *         description: Tarefa não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/tarefas/:id', (req, res) => tarefaController.atualiza(req, res));

/**
 * @swagger
 * /tarefas/{id}/status:
 *   patch:
 *     summary: Atualiza apenas o status de uma tarefa
 *     description: Atualiza apenas o status de uma tarefa existente
 *     tags:
 *       - Tarefas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum:
 *                   - pendente
 *                   - em_progresso
 *                   - concluida
 *                 description: Novo status da tarefa
 *     responses:
 *       200:
 *         description: Status da tarefa atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tarefa'
 *       400:
 *         description: Dados inválidos fornecidos
 *       404:
 *         description: Tarefa não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.patch('/tarefas/:id/status', (req, res) => tarefaController.atualizaStatus(req, res));

/**
 * @swagger
 * /tarefas/{id}:
 *   delete:
 *     summary: Deleta uma tarefa
 *     description: Remove uma tarefa do banco de dados
 *     tags:
 *       - Tarefas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa a ser deletada
 *     responses:
 *       200:
 *         description: Tarefa deletada com sucesso
 *       404:
 *         description: Tarefa não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/tarefas/:id', (req, res) => tarefaController.exclui(req, res));

module.exports = router;
