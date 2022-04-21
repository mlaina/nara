module.exports = function(app){
    const loginRoutes      = require('./login.routes');
    const usuarioRoutes    = require('./usuario.routes');
    const fiestaRoutes     = require('./fiesta.routes');
    const enfiestadoRoutes = require('./enfiestado.routes');
    const bebidaRoutes     = require('./bebida.routes');
    const jugadorRoutes    = require('./jugador.routes');
    const jugoRoutes       = require('./juego.routes');
    const jugoFiestaRoutes       = require('./juegoFiesta.routes');

    loginRoutes(app);
    usuarioRoutes(app);
    fiestaRoutes(app);
    enfiestadoRoutes(app);
    bebidaRoutes(app);
    jugadorRoutes(app);
    jugoRoutes(app);
    jugoFiestaRoutes(app);
};