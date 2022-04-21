---
to: ../models/<%= name %>.js
---
'use strict';
module.exports = (sequelize, DataTypes) => {
    let <%= mayusname %> = sequelize.define('<%= mayusname %>', {
        //atributes
    });
    return <%= mayusname %>;
};