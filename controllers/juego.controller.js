'use strict';

const _               = require('lodash');
const Juego            = require('../config/db').Juego;
const errorHandler    = require('../helpers/error-handler');
const logger          = require('../config/logger');

exports.list_all_juegos = function(req, res) {
    Juego.findAll()
    .then( juegos => {
      logger.info("find All juegos");
      res.json(juegos);
    }).catch();
};



exports.create_a_juego = function(req, res) {
       let new_juego = {};
       if(req.body !== null){
         new_juego=req.body;
       }
       if(_.isEmpty(new_juego)){
           errorHandler("Please provide juego/status", req, res);
       } else {
         new_juego.updatedAt = new Date();
         new_juego.createdAt = new Date();
         Juego.create(new_juego)
         .then( juego => {
           res.json(juego);
           logger.info("Success, juego create");
         }).catch();
       }
};


exports.read_a_juego = function(req, res) {
  Juego.findAll({ where : { id : req.params.juegoId } })
    .then( juego => {
      logger.info("find juego by id");
      res.json(juego[0]);
    }).catch();
};


exports.update_a_juego = function(req, res) {
    let new_juego = {};
        if (req.body.length !== 0) {
          new_juego = req.body;
        }
        if (_.isEmpty(new_juego)) {
            errorHandler("Please provide juego/status", req, res);
        } else {
          new_juego.updatedAt = new Date();
          Juego.update(new_juego, { where:{ id :  req.params.juegoId } })
          .then(juego => {
            logger.info("Update Juego  by id");
            res.json(juego);
          }).catch();
        }
};


exports.delete_a_juego = function(req, res) {
    Juego.destroy({ where:{ id :  req.params.juegoId } })
    .then(() => {
      logger.info("Deleted Juego by id");
      res.send("Deleted Juego by id");
    }).catch();
};