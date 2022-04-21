'use strict';
module.exports = (sequelize, DataTypes) => {
    let Juego = sequelize.define('Juego', {
        nombre: DataTypes.STRING,
        tipo: DataTypes.STRING,
        info: DataTypes.STRING,
        equipos: DataTypes.BOOLEAN
    });

    Juego.associate = function(models) {
        Juego.hasMany(models.JuegoFiesta, {as: "JuegoFiestas"});
    };

    return Juego;
};