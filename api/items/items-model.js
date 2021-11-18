const { default: knex } = require("knex");
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

function searchItemByName(term) {
  return knex("items").where("name", "like", `%${term}%`);
}

module.exports = {
  getAllItems,
  findItemBy,
  findItemById,
  insertItem,
  removeItem,
  updateItem,
  searchItemByName,
};
