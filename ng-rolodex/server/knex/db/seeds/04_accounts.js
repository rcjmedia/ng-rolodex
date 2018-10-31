exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('accounts_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts_table').insert([
        { account_id: 0001, // seeding the id for testing purposes
          title: "Title 1", 
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          user_info_id: 0001,
          levels_info_id: 0001,
          contacts_info_id: 0001
        },
        { account_id: 0002, // seeding the id for testing purposes
          title: "Title 2", 
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          user_info_id: 0002,
          levels_info_id: 0002,
          contacts_info_id: 0002
        },
        { account_id: 0003, // seeding the id for testing purposes
          title: "Title 3", 
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          user_info_id: 0003,
          levels_info_id: 0003,
          contacts_info_id: 0003
        }
      ]);
    });
};