const express = require("express");
const router = express.Router();
// sL = shoppingList
const sLController = require("../../controllers/shoppinglist");

// All paths start with /api/shoppinglist

// post request -> /api/shoppinglist (create item)
router.post("/", sLController.createItem);

module.exports = router;
