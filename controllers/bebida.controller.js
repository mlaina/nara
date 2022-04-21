'use strict';

const _               = require('lodash');
const Bebida          = require('../config/db').Bebida;
const errorHandler    = require('../helpers/error-handler');
const logger          = require('../config/logger');

exports.list_all_bebidas = function(req, res) {
    Bebida.findAll()
    .then( bebidas => {
      logger.info("find All bebidas");
      res.json(bebidas);
    }).catch();
};



exports.create_a_bebida = function(req, res) {
    let new_bebida = {};
    if(req.body !== null){
      new_bebida=req.body;
    }
    if(_.isEmpty(new_bebida)){
        errorHandler("Please provide bebida/status", req, res);
    } else {
      new_bebida.updatedAt = new Date();
      new_bebida.createdAt = new Date();
      Bebida.create(new_bebida)
      .then( bebida => {
        res.json(bebida);
        logger.info("Success, bebida create");
      }).catch();
    }
};


exports.read_a_bebida = function(req, res) {
    Bebida.findAll({ where : { id : req.params.bebidaId } })
    .then( bebida => {
      logger.info("find bebida by id");
      res.json(bebida[0]);
    }).catch();
};


exports.update_a_bebida = function(req, res) {
    let new_bebida = {};
    if (req.body.length !== 0) {
      new_bebida = req.body;
    }
    if (_.isEmpty(new_bebida)) {
        errorHandler("Please provide bebida/status", req, res);
    } else {
      new_bebida.updatedAt = new Date();
      Bebida.update(new_bebida, { where:{ id :  req.params.bebidaId } })
      .then(bebida => {
        logger.info("Update Bebida by id");
        res.json(bebida);
      }).catch();
    }
};


exports.delete_a_bebida = function(req, res) {
    Bebida.destroy({ where:{ id :  req.params.bebidaId } })
    .then(() => {
      logger.info("Deleted Bebida by id");
      res.send("Deleted Bebida by id");
    }).catch();
};