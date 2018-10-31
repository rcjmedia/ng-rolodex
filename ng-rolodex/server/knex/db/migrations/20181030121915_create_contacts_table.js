exports.up = function(knex, Promise) {
    return knex.schema.createTable('contacts_table', function(table) {
      table.increments('contact_id').unique().notNullable();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('address').notNullable();
      table.string('city').notNullable();
      table.string('state').notNullable();
      table.string('zipcode').notNullable();
      table.string('homephone').notNullable();
      table.string('mobile').notNullable();
      table.string('email').notNullable();
      table.string('facebook').notNullable();
      table.string('twitter').notNullable();
      table.string('instagram').notNullable();
      table.string('linkedin').notNullable();
      table.string('github').notNullable();
      table.string('youtube').notNullable();
      table.string('photo').notNullable().defaultTo('/src/assets/photos/default.jpg');
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('contacts_table');
  }