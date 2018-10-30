exports.up = function(knex, Promise) {
    return knex.schema.createTable('accounts_table', function(table) {
        table.increments('account_id').unique().notNullable();
        table.string('title', 255).notNullable();
        table.string('body', 1024).notNullable();

        table
        .integer('user_info_id').notNullable()
        .references('user_id')
        .inTable('users_table');

        table
        .integer('contacts_info_id').notNullable()
        .references('contact_id')
        .inTable('contacts_table');

      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('accounts_table');
  };
  