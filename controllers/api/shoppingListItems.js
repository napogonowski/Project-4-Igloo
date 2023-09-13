const ShoppingListItems = require("../../models/shoppingListItem");

module.exports = {
  createItem,
  index,
};

async function index(req, res) {
  try {
    const allUserItems = await ShoppingListItems.find({ user: req.user._id });
    res.json(allUserItems);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function createItem(req, res) {
  try {
    const { name, qty } = req.body.itemData;
    const newItem = await ShoppingList.create({
      name: name,
      qty: qty,
      user: req.user._id,
    });
    res.json(newItem);
  } catch (error) {
    res.status(400).json(error);
  }
}
