const bebidaController = require('../controllers/bebida.controller');

module.exports = function(app) {

  app.route('/bebidas')
    .get(bebidaController.list_all_bebidas)
    .post(bebidaController.create_a_bebida);
   
  app.route('/bebida/:bebidaId')
    .get(bebidaController.read_a_bebida)
    .put(bebidaController.update_a_bebida)
    .delete(bebidaController.delete_a_bebida);
};