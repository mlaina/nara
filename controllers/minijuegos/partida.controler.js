'use strict';

const Partida            = require('../../config/db').Partida;
const loginController = require('../login.controller');
const bcrypt          = require('bcrypt');
const logger          = require('../../config/logger');
const { bcrytSaltRounds }      = require('../../config/config');

exports.list_all_partidas = function(req, res) {
    // res = loginController.secure(req, res);
    // if(res.statusCode===200){
    Partida.findAll()
        .then( partidas => {
            logger.info("find All partidas");
            res.ok=true;
            res.json(partidas);
        }).catch(error => {
        logger.error(error);
        res.status(404);
        res.json(error);
    });
    // }
};



exports.create_a_partida = function(req, res) {
    // res = loginController.secure(req, res);
    // if(res.statusCode==200) {
    let new_partida = {};
    if(req.body !== null){
        new_partida=req.body;
    }
    if(new_partida == {}){
        logger.info("Please provide partida/status");
        res.status(400).send({ error:true, message: 'Please provide partida/status' });
    } else {
        new_partida.updatedAt = new Date();
        new_partida.createdAt = new Date();
        if(new_partida.pass!=null) {
            new_partida.pass = bcrypt.hashSync(new_partida.pass, parseInt(bcrytSaltRounds));
        }
        Partida.create(new_partida)
            .then( partida => {
                res.json(partida);
                logger.info("Success, partida create");
            }).catch(error => {
            res.status(400);
            res.json(error);
            logger.error(error);
        });
    }
    // }
};


exports.read_a_partida = function(req, res) {
    // res = loginController.secure(req, res);
    // if(res.statusCode==200) {
    Partida.findAll({ where : { id : req.params.partidaId } })
        .then( partida => {
            logger.info("find partida by id");
            res.json(partida[0]);
        }).catch(error => {
        logger.error(error);
        res.status(404);
        res.json(error);
    });
    // }
};


exports.update_a_partida = function(req, res) {
    // res = loginController.secure(req, res);
    // if(res.statusCode==200) {
    let new_partida = {};
    if (req.body.length != 0) {
        new_partida = req.body;
    }
    if (new_partida.partida == {}) {
        logger.error("No partida request");
        res.status(400).send({error: true, message: 'Please provide partida/status'});
    } else {
        new_partida.updatedAt = new Date();
        if(new_partida.pass){
            new_partida.pass = bcrypt.hashSync(new_partida.pass, parseInt(bcrytSaltRounds));
        }
        Partida.update(new_partida, { where:{ id :  req.params.partidaId } })
            .then(partida => {
                logger.info("Update Partida by id");
                res.json(partida);
            }).catch(error => {
            logger.error(error);
            res.status(404);
            res.json(error);
        });
    }
    // }
};


exports.delete_a_partida = function(req, res) {
    // res = loginController.secure(req, res);
    // if(res.statusCode==200) {
    Partida.destroy({ where:{ id :  req.params.partidaId } })
        .then(() => {
            logger.info("Deleted Partida by id");
            res.send("Deleted Partida by id");
        }).catch(error => {
        logger.error(error);
        res.status(404);
        res.json(error);
    });
    // }
};