exports.up = function(knex, Promise) {
    return knex.schema.table('contacts', function(table) {
      table.string('created_by').references('users.id').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('contacts', function(table) {
      table.dropColumn('created_by');
    });
  };
  