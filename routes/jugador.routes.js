const jugadorController = require('../controllers/jugador.controller');

module.exports = function(app) {

  app.route('/jugadores')
    .get(jugadorController.list_all_jugadores)
    .post(jugadorController.create_a_jugador);

  app.route('/jugador/:jugadorId')
    .get(jugadorController.read_a_jugador)
    .put(jugadorController.update_a_jugador)
    .delete(jugadorController.delete_a_jugador);
};