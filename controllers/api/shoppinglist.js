const ShoppingList = require("../../models/shoppingList");

module.exports = {
  createItem,
};

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
