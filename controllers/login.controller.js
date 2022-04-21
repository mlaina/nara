'use strict';

const jwt               = require('jsonwebtoken');
const bcrypt            = require('bcrypt');
const Usuario           = require('../config/db').Usuario;
const logger            = require('../config/logger');
const {jwtEnv, bcrytSaltRounds}  = require('../config/config');

exports.register = (req, res) => {
    let nuevo_usuario = {};
    if(req.body.length!=0){
        nuevo_usuario=req.body;
    }
    if(nuevo_usuario.usuario == {}){
        logger.info("Please provide user/status");
        res.status(400).send({ error:true, message: 'Please provide user/status' });
    } else {
        nuevo_usuario.updatedAt = new Date();
        nuevo_usuario.createdAt = new Date();
        nuevo_usuario.pass = bcrypt.hashSync(nuevo_usuario.pass, parseInt(bcrytSaltRounds));
        Usuario.create(nuevo_usuario)
        .then( usuario => {
            res.json(usuario);
            logger.info("Success, user create");
        }).catch(error => {
            res.status(400);
            res.json(error);
            logger.error(error);
        });
    }
};

exports.secure = (req, res) => {
    let bearer = req.headers['authorization'];
    let token = bearer.substring(7, bearer.length);
    let error = 'Authentication failed! Please check the request';

    if (!token) {
        res.status(400);
        res.json({
            success: false,
            message: error
        });
        logger.error(error);
        return res;
    }

    let verify = jwt.verify(token, jwtEnv.secret, function(err, token) {
        return !err;
    });

    if(!verify){
        res.status(400);
        res.json({
            success: false,
            message: error
        });
        logger.error(error);
        return res;
    }

    return res;
};

exports.auth = (next, req, res) => {
    res =  exports.secure(req, res);
    if(res.statusCode===200) {
        return next(req, res);
    }
    return res;
};

exports.login = (req, res) => {
    let email= req.body.email;
    let pass = req.body.pass;
    Usuario.findAll({
        where: {
            email: email
        }
    }).then( usuarios => {
        if (usuarios[0]) {
            bcrypt.compare(pass,usuarios[0].pass).then(same => {
                if(same) {
                    const token = jwt.sign({email: email}, jwtEnv.secret,
                        {expiresIn: jwtEnv.lifetime, algorithm: jwtEnv.algorithm});
                    res.json({
                        success: true,
                        message: 'Authentication successful!',
                        user: usuarios[0],
                        token: token
                    });
                    logger.info("Token success generate");
                }else{
                    res.status(403);
                    res.json({
                        success: false,
                        message: 'Incorrect username or password'
                    });
                    logger.error("Incorrect username or password");
                }
            }).catch(error => {
                res.status(400);
                res.json({
                    success: false,
                    message: 'Error for compare passwords'
                });
                logger.error(error);
            });
        } else {
            res.status(400);
            res.json({
                success: false,
                message: 'Authentication failed! Please check the request'
            });
            logger.error("Authentication failed! Please check the request");
        }
    }).catch(error => {
        logger.error(error);
        res.status(404);
        res.json(error);
    });
};