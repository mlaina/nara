'use strict';
module.exports = (sequelize, DataTypes) => {
    let Fiesta = sequelize.define('Fiesta', {
        lugar: DataTypes.STRING,
        geolatitud: DataTypes.DECIMAL,
        geolongitud: DataTypes.DECIMAL,
        alias: DataTypes.STRING,
        codigo: DataTypes.STRING,
        npersonas: DataTypes.INTEGER,
        fechainicio: DataTypes.DATE,
        fechafin: DataTypes.DATE
    });

    Fiesta.associate = function(models) {
        Fiesta.hasMany(models.Enfiestado, {as: "enfiestados"});
        Fiesta.hasMany(models.JuegoFiesta, {as: "JuegoFiestas"});
    };

    return Fiesta;
};