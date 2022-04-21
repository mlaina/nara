const expressJwt = require('express-jwt');
const {jwtEnv} = require('../config/config.js');

module.exports = jwt;

function jwt() {
    return expressJwt({secret: jwtEnv.secret, expiresIn: jwtEnv.lifetime, algorithm: jwtEnv.algorithm}).unless({
        path: [
            '/login',
            '/register',
            '/secure',
            '/users'
        ]
    });
}