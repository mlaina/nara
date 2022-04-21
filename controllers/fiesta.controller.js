'use strict';

const _               = require('lodash');
const Fiesta          = require('../config/db').Fiesta;
const errorHandler    = require('../helpers/error-handler');
const logger          = require('../config/logger');

exports.list_all_fiestas = function(req, res) {
    Fiesta.findAll()
    .then( fiestas => {
      logger.info("find All fiestas");
      res.json(fiestas);
    }).catch();
};



exports.create_a_fiesta = function(req, res) {
    let new_fiesta = {};
    if(req.body !== null){
      new_fiesta=req.body;
    }
    if(_.isEmpty(new_fiesta)){
        errorHandler("Please provide fiesta/status", req, res);
    } else {
      new_fiesta.updatedAt = new Date();
      new_fiesta.createdAt = new Date();
      Fiesta.create(new_fiesta)
      .then( fiesta => {
        res.json(fiesta);
        logger.info("Success, fiesta create");
      }).catch();
    }
};


exports.read_a_fiesta = function(req, res) {
    Fiesta.findAll({ where : { id : req.params.fiestaId } })
    .then( fiesta => {
      logger.info("find fiesta by id");
      res.json(fiesta[0]);
    }).catch();
};


exports.update_a_fiesta = function(req, res) {
    let new_fiesta = {};
    if (req.body.length !== 0) {
      new_fiesta = req.body;
    }
    if (_.isEmpty(new_fiesta)) {
        errorHandler("Please provide fiesta/status", req, res);
    } else {
      new_fiesta.updatedAt = new Date();
      Fiesta.update(new_fiesta, { where:{ id :  req.params.fiestaId } })
      .then(fiesta => {
        logger.info("Update Fiesta by id");
        res.json(fiesta);
      }).catch();
    }
};


exports.delete_a_fiesta = function(req, res) {
    Fiesta.destroy({ where:{ id :  req.params.fiestaId } })
    .then(() => {
      logger.info("Deleted Fiesta by id");
      res.send("Deleted Fiesta by id");
    }).catch();
};