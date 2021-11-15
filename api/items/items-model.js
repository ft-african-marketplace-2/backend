const db = require("../data/db-config");

function getAllItems() {
  return db("items");
}

function findItemById(id) {
  return db("items").where("item_id", id).first();
}

function findItemBy(filter) {
  return db("items").where(filter);
}

async function insertItem(item) {
  // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
  // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
  // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
  const [newItemObject] = await db("items").insert(item, [
    "item_id",
    "name",
    "description",
    "price",
    "img",
  ]);
  return newItemObject;
}
async function updateItem(id, changes) {
  const [updatedItemObject] = await db("items")
    .where("item_id", id)
    .update(changes, ["item_id", "name", "description", "price", "img"]);
  return updatedItemObject;
}

async function removeItem(id) {
  const deletedItem = await findItemById(id);
  await db("items").where("item_id", id).del();
  return deletedItem;
}

// select description
// from items
// where to_tsvector(description) @@ to_tsquery('marketplace');
// select * from items where name like '%Tribal%';

function searchItemByName(term) {
  return db("items").where("name", "like", `%${term}%`);
}

// function searchItemByName(searchterm) {
//   // select name, to_tsvector('pg_catalog.english', name) as name_vector
//   // from items
//   // where to_tsvector('pg_catalog.english', name) @@ to_tsquery('african');
//   return db
//     .from("items")
//     .select(
//       "name",
//       to_tsvector("pg_catalog.english", "name").where(
//         'to_tsvector("pg_catalog.english", name)',
//         to_tsquery(searchterm)
//       )
//     );
// }

module.exports = {
  getAllItems,
  findItemBy,
  findItemById,
  insertItem,
  removeItem,
  updateItem,
  searchItemByName,
};
