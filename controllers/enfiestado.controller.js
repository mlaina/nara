'use strict';

const _               = require('lodash');
const Enfiestado          = require('../config/db').Enfiestado;
const errorHandler    = require('../helpers/error-handler');
const logger          = require('../config/logger');

exports.list_all_enfiestados = function(req, res) {
    Enfiestado.findAll()
    .then( enfiestados => {
      logger.info("find All enfiestados");
      res.json(enfiestados);
    }).catch();
};



exports.create_a_enfiestado = function(req, res) {
    let new_enfiestado = {};
    if(req.body !== null){
      new_enfiestado=req.body;
    }
    if(_.isEmpty(new_enfiestado)){
        errorHandler("Please provide enfiestado/status", req, res);
    } else {
      new_enfiestado.updatedAt = new Date();
      new_enfiestado.createdAt = new Date();
      Enfiestado.create(new_enfiestado)
      .then( enfiestado => {
        res.json(enfiestado);
        logger.info("Success, enfiestado create");
      }).catch();
    }
};


exports.read_a_enfiestado = function(req, res) {
    Enfiestado.findAll({ where : { id : req.params.enfiestadoId } })
    .then( enfiestado => {
      logger.info("find enfiestado by id");
      res.json(enfiestado[0]);
    }).catch();
};


exports.update_a_enfiestado = function(req, res) {
    let new_enfiestado = {};
    if (req.body.length !== 0) {
      new_enfiestado = req.body;
    }
    if (_.isEmpty(new_enfiestado)) {
        errorHandler("Please provide enfiestado/status", req, res);
    } else {
      new_enfiestado.updatedAt = new Date();
      Enfiestado.update(new_enfiestado, { where:{ id :  req.params.enfiestadoId } })
      .then(enfiestado => {
        logger.info("Update Enfiestado by id");
        res.json(enfiestado);
      }).catch();
    }
};


exports.delete_a_enfiestado = function(req, res) {
    Enfiestado.destroy({ where:{ id :  req.params.enfiestadoId } })
    .then(() => {
      logger.info("Deleted Enfiestado by id");
      res.send("Deleted Enfiestado by id");
    }).catch();
};