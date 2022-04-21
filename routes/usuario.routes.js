const usuarioController = require('../controllers/usuario.controller');

module.exports = function(app) {

  app.route('/usuarios')
    .get(usuarioController.list_all_usuarios)
    .post(usuarioController.create_a_usuario);

  app.route('/usuario/:usuarioId')
    .get(usuarioController.read_a_usuario)
    .put(usuarioController.update_a_usuario)
    .delete(usuarioController.delete_a_usuario);
};