const express = require("express");
const router = express.Router();
const itemsController = require("../../controllers/api/items");

// All paths start with "api/items"

// Post request -> /api/items (createItem)
router.post("/", itemsController.createItem);

// get request -> /api/items (index)
router.get("/", itemsController.index);

//get request -> /api/item/:id (show )
router.get("/:id", itemsController.show);

//put request -> /api/item/:id (put)
router.put("/:id", itemsController.update);

// Delete request -> api/item/:id  (delete)
router.delete("/:id", itemsController.delete);

module.exports = router;
