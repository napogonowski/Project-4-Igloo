const Item = require("../../models/item");

module.exports = {
  createItem,
  index,
  show,
  delete: deleteItem,
  update,
};

async function update(req, res) {
  try {
    const itemId = req.params.id;
    const updatedItem = await Item.findByIdAndUpdate(itemId, req.body, {
      new: true,
    });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function deleteItem(req, res) {
  try {
    const item = await Item.findById(req.params.id);
    await item.deleteOne();
    const newItemsList = await Item.find({ user: req.user._id });
    res.json(newItemsList);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function show(req, res) {
  try {
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function index(req, res) {
  try {
    const items = await Item.find({ user: req.user._id });
    res.json(items);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function createItem(req, res) {
  try {
    const items = req.body.formData;
    const newItems = await Item.create(
      items.map((item) => ({ ...item, user: req.user._id }))
    );
    res.json(newItems);
  } catch (error) {
    res.status(400).json(error);
  }
}
