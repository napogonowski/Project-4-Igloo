const express = require("express");
const router = express.Router();
// sL = shoppingList
const sLController = require("../../controllers/api/shoppingListItems");

// All paths start with /api/shoppinglist

// post request -> /api/shoppinglist (create a new item)
router.post("/", sLController.createItem);

// get request -> /api/shoppinglist  INDEX (get all  / getting all items )
router.get("/", sLController.index);

// get request -> /api/shoppinglist/:id SHOW (getting one item )
router.get("/:id", sLController.show);

// put request -> api/shopplinglist/:id update (updating an item)
router.put("/:id", sLController.update);

// delete request -> api/shoppinglist/:id Delete (deleting one item )
router.delete("/:id", sLController.delete);

// delete request -> api/shoppinglist/:id Delete (deleting ALL items )
router.delete("/:id", sLController.deleteAll);

module.exports = router;
