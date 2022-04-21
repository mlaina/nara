'use strict';

const models = require('../../config/db');
const logger = require('../../config/logger');
const _USUARIOS = require('./usuarios');
const _BEBIDAS = require('./bebidas');
const _JUEGOS = require('./juegos');

module.exports = {
    insert: () => {
        models.Usuario.bulkCreate(_USUARIOS)
        .then(res => {
            logger.info('Success insert users');
        }).catch(error => {
            logger.error(error);
        });
        models.Bebida.bulkCreate(_BEBIDAS)
            .then(res => {
                logger.info('Success insert bebidas');
            }).catch(error => {
            logger.error(error);
        });
        models.Juego.bulkCreate(_JUEGOS)
            .then(res => {
                logger.info('Success insert juegos');
            }).catch(error => {
            logger.error(error);
        });
    }
};