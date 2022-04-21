---
to: ../controllers/<%= name %>.controller.js
---

'use strict';

const _               = require('lodash');
const <%= mayusname %>            = require('../config/db').<%= mayusname %>;
const errorHandler    = require('../helpers/error-handler');
const logger          = require('../config/logger');

exports.list_all_<%= pluralname %> = function(req, res) {
    <%= mayusname %>.findAll()
    .then( <%= pluralname %> => {
      logger.info("find All <%= pluralname %>");
      res.json(<%= pluralname %>);
    }).catch();
};



exports.create_a_<%= name %> = function(req, res) {
       let new_<%= name %> = {};
       if(req.body !== null){
         new_<%= name %>=req.body;
       }
       if(_.isEmpty(new_<%= name %>)){
           errorHandler("Please provide <%= name %>/status", req, res);
       } else {
         new_<%= name %>.updatedAt = new Date();
         new_<%= name %>.createdAt = new Date();
         <%= mayusname %>.create(new_<%= name %>)
         .then( <%= name %> => {
           res.json(<%= name %>);
           logger.info("Success, <%= name %> create");
         }).catch();
       }
};


exports.read_a_<%= name %> = function(req, res) {
  <%= mayusname %>.findAll({ where : { id : req.params.<%= name %>Id } })
    .then( <%= name %> => {
      logger.info("find <%= name %> by id");
      res.json(<%= name %>[0]);
    }).catch();
};


exports.update_a_<%= name %> = function(req, res) {
    let new_<%= name %> = {};
        if (req.body.length !== 0) {
          new_<%= name %> = req.body;
        }
        if (_.isEmpty(new_<%= name %>)) {
            errorHandler("Please provide <%= name %>/status", req, res);
        } else {
          new_<%= name %>.updatedAt = new Date();
          <%= mayusname %>.update(new_<%= name %>, { where:{ id :  req.params.<%= name %>Id } })
          .then(<%= name %> => {
            logger.info("Update <%= mayusname %>  by id");
            res.json(<%= name %>);
          }).catch();
        }
};


exports.delete_a_<%= name %> = function(req, res) {
    <%= mayusname %>.destroy({ where:{ id :  req.params.<%= name %>Id } })
    .then(() => {
      logger.info("Deleted <%= mayusname %> by id");
      res.send("Deleted <%= mayusname %> by id");
    }).catch();
};