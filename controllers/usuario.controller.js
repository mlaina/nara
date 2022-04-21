'use strict';

const _               = require('lodash');
const Usuario            = require('../config/db').Usuario;
const errorHandler    = require('../helpers/error-handler');
const logger          = require('../config/logger');

exports.list_all_usuarios = function(req, res) {
    Usuario.findAll()
    .then( usuarios => {
      logger.info("find All usuarios");
      res.json(usuarios);
    }).catch();
};



exports.create_a_usuario = function(req, res) {
       let new_usuario = {};
       if(req.body !== null){
         new_usuario=req.body;
       }
       if(_.isEmpty(new_usuario)){
           errorHandler("Please provide usuario/status", req, res);
       } else {
         new_usuario.updatedAt = new Date();
         new_usuario.createdAt = new Date();
         Usuario.create(new_usuario)
         .then( usuario => {
           res.json(usuario);
           logger.info("Success, usuario create");
         }).catch();
       }
};


exports.read_a_usuario = function(req, res) {
  Usuario.findAll({ where : { id : req.params.usuarioId } })
    .then( usuario => {
      logger.info("find usuario by id");
      res.json(usuario[0]);
    }).catch();
};


exports.update_a_usuario = function(req, res) {
    let new_usuario = {};
        if (req.body.length !== 0) {
          new_usuario = req.body;
        }
        if (_.isEmpty(new_usuario)) {
            errorHandler("Please provide usuario/status", req, res);
        } else {
          new_usuario.updatedAt = new Date();
          Usuario.update(new_usuario, { where:{ id :  req.params.usuarioId } })
          .then(usuario => {
            logger.info("Update Usuario  by id");
            res.json(usuario);
          }).catch();
        }
};


exports.delete_a_usuario = function(req, res) {
    Usuario.destroy({ where:{ id :  req.params.usuarioId } })
    .then(() => {
      logger.info("Deleted Usuario by id");
      res.send("Deleted Usuario by id");
    }).catch();
};