---
to: ../routes/<%= name %>.routes.js
---
const <%= name %>Controller = require('../controllers/<%= name %>.controller');

module.exports = function(app) {

  app.route('/<%= pluralname %>')
    .get(<%= name %>Controller.list_all_<%= pluralname %>)
    .post(<%= name %>Controller.create_a_<%= name %>);

  app.route('/<%= name %>/:<%= name %>Id')
    .get(<%= name %>Controller.read_a_<%= name %>)
    .put(<%= name %>Controller.update_a_<%= name %>)
    .delete(<%= name %>Controller.delete_a_<%= name %>);
};