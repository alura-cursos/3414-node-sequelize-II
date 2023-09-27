const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');

const matriculaServices = new MatriculaServices();

class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices);
  }

  async pegaMatriculasPorEstudante(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculasPorEstudante = await matriculaServices.pegaEContaRegistros({
        estudante_id: Number(estudante_id),
        status: 'matriculado'
      });
      return res.status(200).json(listaMatriculasPorEstudante);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async pegaCursosLotados (req, res) {
    const lotacaoCurso = 2;
    try {
      const cursosLotados = await matriculaServices.pegaEContaRegistros({
        status: 'matriculado'
      });
      return res.status(200).json(cursosLotados);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = MatriculaController;
