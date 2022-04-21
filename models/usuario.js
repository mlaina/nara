'use strict';
module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario', {
        nombre: DataTypes.STRING,
        nick: DataTypes.STRING,
        email: DataTypes.STRING,
        pass: DataTypes.STRING,
        apellido: DataTypes.STRING,
        edad: DataTypes.INTEGER,
        altura: DataTypes.DECIMAL,
        peso: DataTypes.DECIMAL,
        instagram: DataTypes.STRING
    });
    Usuario.associate = function(models) {
        Usuario.hasMany(models.Enfiestado, {as: "enfiestados"});
    };

    return Usuario;
};