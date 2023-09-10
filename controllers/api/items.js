const Item = require("../../models/item");

module.exports = {
  createItem,
};

async function createItem(req, res) {
  try {
    const { name, qty, expDate, fridge } = req.body.e;
    console.log("recieved POST request with data", req.body);
    const newItem = await Item.create([{
      name: name,
      qty: qty,
      expDate: expDate,
      fridge: fridge,
      // category: category,
      user: req.user._id,
    }]);
    res.json(newItem);
  } catch (error) {
    res.status(400).json(error);
  }
}
