exports.up = (knex) => {
  return knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 200).notNullable().unique();
      users.string("password", 200).notNullable();
      users.timestamps(false, true);
    })
    .createTable("items", (items) => {
      items.increments("item_id");
      items.string("name", 200).notNullable();
      items.text("description").notNullable();
      items.float("price").notNullable();
      items.string("img", 200);
      items
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users");
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("items");
};
