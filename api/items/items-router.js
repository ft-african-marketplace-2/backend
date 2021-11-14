const router = require("express").Router();
const Items = require("../items/items-model");

router.get("/", (req, res, next) => {
  Items.getAllItems()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch(next);
});
router.get("/:item_id", (req, res, next) => {
  Items.findItemById(req.params.item_id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch(next);
});
router.post("/", (req, res, next) => {
  Items.insertItem(req.body)
    .then((newItem) => {
      res.status(201).json(newItem);
    })
    .catch(next);
});
router.put("/:item_id", (req, res, next) => {
  Items.updateItem(req.params.item_id, req.body)
    .then((updatedItem) => {
      res.status(200).json(updatedItem);
    })
    .catch(next);
});
router.delete("/:item_id", (req, res, next) => {
  Items.removeItem(req.params.item_id)
    .then((deletedItem) => {
      res.status(200).json(deletedItem);
    })
    .catch(next);
});

module.exports = router;
