// Users
// Property	    Type	    Options
// id (PK)	    number	    not null, unique
// username	    string	    not null, unique
// created_at	TS w/ TZ	not null
// updated_at	TS w/ TZ	not null
// name	        string	    nullable
// email	    string	    nullable
// address	    string	    nullable
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
      table.increments().notNullable().unique();
      table.string('username').notNullable().unique();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now()).notNullable();
      table.string('name');
      table.string('email');
      table.string('address');
      table.string('password').notNullable().unique();
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  }