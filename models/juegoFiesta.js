'use strict';
module.exports = (sequelize, DataTypes) => {
    let JuegoFiesta = sequelize.define('JuegoFiesta', {
        idfiesta: DataTypes.INTEGER,
        idjuego: DataTypes.INTEGER
    }, {});

    JuegoFiesta.associate = function(models) {
        models.JuegoFiesta.belongsTo(models.Fiesta, {foreignKey: "idfiesta"});
        models.JuegoFiesta.belongsTo(models.Juego,  {foreignKey: "idjuego"});
    };

    return JuegoFiesta;
};