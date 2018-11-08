// associations

// Foreign Key	    Name	    Relation
// created_by	    creator	    belongs to Users

exports.up = function(knex, Promise) {
    return knex.schema.createTable('associations', function(table) {
        table
        .integer('creator').notNullable()
        .references('id')
        .inTable('users');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('associations');
  };
  