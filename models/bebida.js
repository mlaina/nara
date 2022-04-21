'use strict';
module.exports = (sequelize, DataTypes) => {
    let Bebida = sequelize.define('Bebida', {
        nombre: DataTypes.STRING,
        graduacion: DataTypes.DECIMAL,
        marca: DataTypes.STRING,
        tipo: DataTypes.STRING
    }, {});

    Bebida.associate = function(models) {
        Bebida.hasMany(models.Enfiestado, {as: "enfiestados"});
    };
    return Bebida;
};