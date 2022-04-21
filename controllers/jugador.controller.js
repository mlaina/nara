'use strict';

const _               = require('lodash');
const Jugador            = require('../config/db').Jugador;
const errorHandler    = require('../helpers/error-handler');
const logger          = require('../config/logger');

exports.list_all_jugadores = function(req, res) {
    Jugador.findAll()
    .then( jugadores => {
        logger.info("find All jugadores");
        res.json(jugadores);
    }).catch();
};



exports.create_a_jugador = function(req, res) {
       let new_jugador = {};
       if(req.body !== null){
         new_jugador=req.body;
       }
       if(_.isEmpty(new_jugador)){
           errorHandler("Please provide jugador/status", req, res);
       } else {
         new_jugador.updatedAt = new Date();
         new_jugador.createdAt = new Date();
         Jugador.create(new_jugador)
         .then( jugador => {
           res.json(jugador);
           logger.info("Success, jugador create");
         }).catch();
       }
};


exports.read_a_jugador = function(req, res) {
  Jugador.findAll({ where : { id : req.params.jugadorId } })
    .then( jugador => {
      logger.info("find jugador by id");
      res.json(jugador[0]);
    }).catch();
};


exports.update_a_jugador = function(req, res) {
    let new_jugador = {};
        if (req.body.length !== 0) {
          new_jugador = req.body;
        }
        if (_.isEmpty(new_jugador)) {
            errorHandler("Please provide jugador/status", req, res);
        } else {
          new_jugador.updatedAt = new Date();
          Jugador.update(new_jugador, { where:{ id :  req.params.jugadorId } })
          .then(jugador => {
            logger.info("Update Jugador  by id");
            res.json(jugador);
          }).catch();
        }
};


exports.delete_a_jugador = function(req, res) {
    Jugador.destroy({ where:{ id :  req.params.jugadorId } })
    .then(() => {
      logger.info("Deleted Jugador by id");
      res.send("Deleted Jugador by id");
    }).catch();
};