const express = require("express");
const router = express.Router();
const itemsController = require("../../controllers/api/items");

// All paths start with "api/items"

// Post request : /api/items (creating an item)
router.post("/", itemsController.createItem);

module.exports = router;
