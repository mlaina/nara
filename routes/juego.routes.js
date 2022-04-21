const juegoController = require('../controllers/juego.controller');

module.exports = function(app) {

  app.route('/juegos')
    .get(juegoController.list_all_juegos)
    .post(juegoController.create_a_juego);

  app.route('/juego/:juegoId')
    .get(juegoController.read_a_juego)
    .put(juegoController.update_a_juego)
    .delete(juegoController.delete_a_juego);
};