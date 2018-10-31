exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('levels_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('levels_table').insert([
        { level_id: 0001, // seeding the id for testing purposes
          name: "admin", 
          rank: "1"
        },
        { level_id: 0003, // seeding the id for testing purposes
          name: "subscriber", 
          rank: "2"
        }
      ]);
    });
};