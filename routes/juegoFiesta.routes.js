const juegoFiestaController = require('../controllers/juegoFiesta.controller');

module.exports = function(app) {

  app.route('/juegosFiesta')
    .get(juegoFiestaController.list_all_juegosFiesta)
    .post(juegoFiestaController.create_a_juegoFiesta);

  app.route('/juegoFiesta/:juegoFiestaId')
    .get(juegoFiestaController.read_a_juegoFiesta)
    .put(juegoFiestaController.update_a_juegoFiesta)
    .delete(juegoFiestaController.delete_a_juegoFiesta);
};