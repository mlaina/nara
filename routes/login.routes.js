const loginController = require('../controllers/login.controller');

module.exports = function(app) {
    app.route('/register')
        .post(loginController.register);

    app.route('/login')
        .post(loginController.login);

    app.route('/secure')
        .post(loginController.secure);
};