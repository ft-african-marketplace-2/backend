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
    "user_id",
  ]);
  return newItemObject;
}
async function updateItem(id, changes) {
  const [updatedItemObject] = await db("items")
    .where("item_id", id)
    .update(changes, [
      "item_id",
      "name",
      "description",
      "price",
      "img",
      "user_id",
    ]);
  return updatedItemObject;
}

async function removeItem(id) {
  const deletedItem = await findItemById(id);
  await db("items").where("item_id", id).del();
  return deletedItem;
}

function searchItemByName(term) {
  return db("items").where("name", "like", `%${term}%`);
}

async function getStuffByText(words, strict) {
  const alphaNumeric = words.replace(/[^0-9a-z]/gi, " ");
  const wordsArray = alphaNumeric.trim().split(/\s+/);
  const search = wordsArray.join(` ${strict ? "&" : "|"} `);
  const result = await db.raw(
    `
    SELECT * FROM items
    WHERE to_tsvector(name) @@ to_tsquery('??')
    ORDER BY name DESC;
  `,
    [search]
  );
  return result.rows;
}

module.exports = {
  getAllItems,
  findItemBy,
  findItemById,
  insertItem,
  removeItem,
  updateItem,
  searchItemByName,
  getStuffByText,
};
