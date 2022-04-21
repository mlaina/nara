'use strict';

module.exports = (sequelize, DataTypes) => {
    let Enfiestado = sequelize.define('Enfiestado', {
        geolatitud: DataTypes.DECIMAL,
        geolongitud: DataTypes.DECIMAL,
        alias: DataTypes.STRING,
        codigo: DataTypes.STRING,
        npersonas: DataTypes.INTEGER,
        fechainicio: DataTypes.DATE,
        fechafin: DataTypes.DATE,
        idusuario: DataTypes.INTEGER,
        idbebida: DataTypes.INTEGER,
        idfiesta: DataTypes.INTEGER
    }, {});

    Enfiestado.associate = function(models) {
        Enfiestado.belongsTo(models.Usuario, {foreignKey: "idusuario", as: "usuario"});
        Enfiestado.belongsTo(models.Bebida, {foreignKey: "idbebida", as: "bebida"});
        Enfiestado.belongsTo(models.Fiesta, {foreignKey: "idfiesta", as: "fiesta"});
    };
    return Enfiestado;
};
