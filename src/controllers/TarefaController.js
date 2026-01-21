const Controller = require('./Controller.js');
const TarefaServices = require('../services/TarefaServices.js');

const tarefaServices = new TarefaServices();

class TarefaController extends Controller {
    constructor() { 
        super(tarefaServices);  
    }
}   

module.exports = TarefaController;