'use strict';
module.exports = (sequelize, DataTypes) => {
    let Jugador = sequelize.define('Jugador', {
        idenfiestado: DataTypes.INTEGER,
        idjuegofiesta: DataTypes.INTEGER
    });

    Jugador.associate = function(models) {
        models.Jugador.belongsTo(models.Enfiestado, {foreignKey: "idenfiestado", as: "enfiestado"});
        models.Jugador.belongsTo(models.JuegoFiesta, {foreignKey: "idjuegofiesta", as: "juegofiesta"});
    };

    return Jugador;
};