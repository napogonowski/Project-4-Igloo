const { ObjectId } = require("mongodb");
const Item = require("../../models/item");

module.exports = {
  createItem,
  index,
  show,
  delete: deleteItem
};


async function deleteItem (req, res) {
  try{
    const item = await Item.findById(req.params.id);
    await item.deleteOne(); 
    const newItemsList = await Item.find({ user: req.user._id });
    res.json(newItemsList);

  } catch (error){
    console.log("error", error);
  }


}

async function show(req, res) {
  try {
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch (error) {
    console.log("error", error);
  }
}

async function index(req, res) {
  try {
    const items = await Item.find({ user: req.user._id });
    res.json(items);
  } catch (error) {
    console.log("controller function", error);
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
