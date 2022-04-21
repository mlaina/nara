'use strict';

var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(__filename);
let dirModels = __dirname.replace('config','models');
var Db = require('sequelize');
const { dbEnv }  = require('./config');
var seq       = {};

const sequelize = new Db(dbEnv.db, dbEnv.user, dbEnv.password, {
    host: dbEnv.host,
    dialect: dbEnv.dialect,
    operatorsAliases: false
});

fs
    .readdirSync(dirModels)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var model = sequelize['import'](path.join(dirModels, file));
        seq[model.name] = model;
    });
//poner el log

Object.keys(seq).forEach(modelName => {
    if (seq[modelName].associate) {
        seq[modelName].associate(seq);
    }
});

seq.sequelize = sequelize;
seq.Sequelize = Db;


module.exports = seq;