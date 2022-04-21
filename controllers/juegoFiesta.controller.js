'use strict';

const _               = require('lodash');
const JuegoFiesta            = require('../config/db').JuegoFiesta;
const errorHandler    = require('../helpers/error-handler');
const logger          = require('../config/logger');

exports.list_all_juegosFiesta = function(req, res) {
    JuegoFiesta.findAll()
    .then( juegosFiesta => {
      logger.info("find All juegosFiesta");
      res.json(juegosFiesta);
    }).catch();
};



exports.create_a_juegoFiesta = function(req, res) {
       let new_juegoFiesta = {};
       if(req.body !== null){
         new_juegoFiesta=req.body;
       }
       if(_.isEmpty(new_juegoFiesta)){
           errorHandler("Please provide juegoFiesta/status", req, res);
       } else {
         new_juegoFiesta.updatedAt = new Date();
         new_juegoFiesta.createdAt = new Date();
         JuegoFiesta.create(new_juegoFiesta)
         .then( juegoFiesta => {
           res.json(juegoFiesta);
           logger.info("Success, juegoFiesta create");
         }).catch();
       }
};


exports.read_a_juegoFiesta = function(req, res) {
  JuegoFiesta.findAll({ where : { id : req.params.juegoFiestaId } })
    .then( juegoFiesta => {
      logger.info("find juegoFiesta by id");
      res.json(juegoFiesta[0]);
    }).catch();
};


exports.update_a_juegoFiesta = function(req, res) {
    let new_juegoFiesta = {};
        if (req.body.length !== 0) {
          new_juegoFiesta = req.body;
        }
        if (_.isEmpty(new_juegoFiesta)) {
            errorHandler("Please provide juegoFiesta/status", req, res);
        } else {
          new_juegoFiesta.updatedAt = new Date();
          JuegoFiesta.update(new_juegoFiesta, { where:{ id :  req.params.juegoFiestaId } })
          .then(juegoFiesta => {
            logger.info("Update JuegoFiesta  by id");
            res.json(juegoFiesta);
          }).catch();
        }
};


exports.delete_a_juegoFiesta = function(req, res) {
    JuegoFiesta.destroy({ where:{ id :  req.params.juegoFiestaId } })
    .then(() => {
      logger.info("Deleted JuegoFiesta by id");
      res.send("Deleted JuegoFiesta by id");
    }).catch();
};