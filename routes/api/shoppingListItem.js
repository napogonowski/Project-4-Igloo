const express = require("express");
const router = express.Router();
// sL = shoppingList
const sLController = require("../../controllers/api/shoppingListItems");

// All paths start with /api/shoppinglist

// post request -> /api/shoppinglist (create item)
router.post("/", sLController.createItem);

// get request -> /api/shoppinglist  (get all  / index)
router.get("/", sLController.index)
module.exports = router;
