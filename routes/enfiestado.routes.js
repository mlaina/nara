const enfiestadoController = require('../controllers/enfiestado.controller');

module.exports = function(app) {

  app.route('/enfiestados')
    .get(enfiestadoController.list_all_enfiestados)
    .post(enfiestadoController.create_a_enfiestado);
   
  app.route('/enfiestado/:enfiestadoId')
    .get(enfiestadoController.read_a_enfiestado)
    .put(enfiestadoController.update_a_enfiestado)
    .delete(enfiestadoController.delete_a_enfiestado);
};