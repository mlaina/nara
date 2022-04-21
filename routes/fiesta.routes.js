const fiestaController = require('../controllers/fiesta.controller');

module.exports = function(app) {

  app.route('/fiestas')
    .get(fiestaController.list_all_fiestas)
    .post(fiestaController.create_a_fiesta);
   
  app.route('/fiesta/:fiestaId')
    .get(fiestaController.read_a_fiesta)
    .put(fiestaController.update_a_fiesta)
    .delete(fiestaController.delete_a_fiesta);
};