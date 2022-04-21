'use strict';

const Respuesta            = require('../../config/db').Respuesta;
const loginController = require('../login.controller');
const bcrypt          = require('bcrypt');
const logger          = require('../../config/logger');
const { bcrytSaltRounds }      = require('../../config/config');

exports.list_all_respuestas = function(req, res) {
    // res = loginController.secure(req, res);
    // if(res.statusCode===200){
    Respuesta.findAll()
        .then( respuestas => {
            logger.info("find All respuestas");
            res.ok=true;
            res.json(respuestas);
        }).catch(error => {
        logger.error(error);
        res.status(404);
        res.json(error);
    });
    // }
};



exports.create_a_respuesta = function(req, res) {
    // res = loginController.secure(req, res);
    // if(res.statusCode==200) {
    let new_respuesta = {};
    if(req.body !== null){
        new_respuesta=req.body;
    }
    if(new_respuesta == {}){
        logger.info("Please provide respuesta/status");
        res.status(400).send({ error:true, message: 'Please provide respuesta/status' });
    } else {
        new_respuesta.updatedAt = new Date();
        new_respuesta.createdAt = new Date();
        if(new_respuesta.pass!=null) {
            new_respuesta.pass = bcrypt.hashSync(new_respuesta.pass, parseInt(bcrytSaltRounds));
        }
        Respuesta.create(new_respuesta)
            .then( respuesta => {
                res.json(respuesta);
                logger.info("Success, respuesta create");
            }).catch(error => {
            res.status(400);
            res.json(error);
            logger.error(error);
        });
    }
    // }
};


exports.read_a_respuesta = function(req, res) {
    // res = loginController.secure(req, res);
    // if(res.statusCode==200) {
    Respuesta.findAll({ where : { id : req.params.respuestaId } })
        .then( respuesta => {
            logger.info("find respuesta by id");
            res.json(respuesta[0]);
        }).catch(error => {
        logger.error(error);
        res.status(404);
        res.json(error);
    });
    // }
};


exports.update_a_respuesta = function(req, res) {
    // res = loginController.secure(req, res);
    // if(res.statusCode==200) {
    let new_respuesta = {};
    if (req.body.length != 0) {
        new_respuesta = req.body;
    }
    if (new_respuesta.respuesta == {}) {
        logger.error("No respuesta request");
        res.status(400).send({error: true, message: 'Please provide respuesta/status'});
    } else {
        new_respuesta.updatedAt = new Date();
        if(new_respuesta.pass){
            new_respuesta.pass = bcrypt.hashSync(new_respuesta.pass, parseInt(bcrytSaltRounds));
        }
        Respuesta.update(new_respuesta, { where:{ id :  req.params.respuestaId } })
            .then(respuesta => {
                logger.info("Update Respuesta by id");
                res.json(respuesta);
            }).catch(error => {
            logger.error(error);
            res.status(404);
            res.json(error);
        });
    }
    // }
};


exports.delete_a_respuesta = function(req, res) {
    // res = loginController.secure(req, res);
    // if(res.statusCode==200) {
    Respuesta.destroy({ where:{ id :  req.params.respuestaId } })
        .then(() => {
            logger.info("Deleted Respuesta by id");
            res.send("Deleted Respuesta by id");
        }).catch(error => {
        logger.error(error);
        res.status(404);
        res.json(error);
    });
    // }
};