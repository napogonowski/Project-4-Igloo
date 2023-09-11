const express = require("express");
const router = express.Router();
const itemsController = require("../../controllers/api/items");

// All paths start with "api/items"

// Post request : /api/items (creating an item)
router.post("/", itemsController.createItem);

// get request: /api/items (index) 
router.get("/", itemsController.index);

//get request : /api/item/:id (show )
router.get("/:id", itemsController.show)

module.exports = router;
