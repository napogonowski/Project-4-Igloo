const { ObjectId } = require("mongodb");
const Item = require("../../models/item");

module.exports = {
  createItem,
  index,
  show,
  delete: deleteItem,
  update,
};

async function update(req, res) {
  // console.log("controller function log 1 ", req.body)
  try {
    const itemId = req.params.id;

    // console.log("controller function log 2 ", itemId)
    const updatedItem = await Item.findByIdAndUpdate(itemId, req.body, {
      new: true,
    });
    console.log("controller function log 3", updatedItem);
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
    const { name, qty, expDate, fridge } = req.body.formData;
    console.log("recieved POST request with data", req.body);
    const newItem = await Item.create({
      name: name,
      qty: qty,
      expDate: expDate,
      fridge: fridge,
      // category: category,
      user: req.user._id,
    });
    console.log("new item ", newItem);
    res.json(newItem);
  } catch (error) {
    res.status(400).json(error);
  }
}
