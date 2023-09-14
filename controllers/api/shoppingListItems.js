const ShoppingListItem = require("../../models/shoppingListItem");

module.exports = {
  createItem,
  index,
  show,
  delete: deleteItem,
  deleteAll,
};

async function deleteAll(req, res) {
  try {
    aftermath = await ShoppingListItem.deleteMany({ user: req.user._id });
    res.json(aftermath);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function deleteItem(req, res) {
  try {
    const item = await ShoppingListItem.findById(req.params.id);
    await item.deleteOne();
    const newItemsList = await ShoppingListItem.find({ user: req.user._id });
    res.json(newItemsList);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function show(req, res) {
  try {
    const item = await ShoppingListItem.findById(req.params.id);
    res.json(item);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function index(req, res) {
  try {
    const allUserItems = await ShoppingListItem.find({ user: req.user._id });
    res.json(allUserItems);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function createItem(req, res) {
  try {
    console.log("controller function", req.body.itemData);
    const { name, qty } = req.body.itemData;
    console.log("contoller function ", name, qty);
    const newItem = await ShoppingListItem.create({
      name: name,
      qty: qty,
      user: req.user._id,
    });
    res.json(newItem);
  } catch (error) {
    res.status(400).json(error);
  }
}
