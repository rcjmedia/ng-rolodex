// Contacts
// Property	    Type	    Options
// id (PK)	    number	    not null, unique
// name	        string	    not null
// created_at	TS w/ TZ	not null
// updated_at	TS w/ TZ	not null
// address	    string	    nullable
// mobile	    string	    nullable
// work	        string	    nullable
// home	        string	    nullable
// email	    string	    nullable
// twitter	    string	    nullable
// instagram	string	    nullable
// github	    string	    nullable

exports.up = function(knex, Promise) {
    return knex.schema.createTable('contacts', function(table) {
      table.increments().unique().notNullable().unique();
      table.string('name').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
      table.string('address');
      table.string('mobile');
      table.string('work');
      table.string('home');
      table.string('email');
      table.string('twitter');
      table.string('instagram');
      table.string('github');
      table.string('photo'); // my own stretch goal
      table.integer('created_by').references('users.id').notNullable();
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('contacts');
  }