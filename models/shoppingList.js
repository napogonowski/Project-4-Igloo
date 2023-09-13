const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listItemSchema = new Schema(
  {
    name: { type: String, required: true },
    qty: { type: Number, default: 1 },
  },
  {
    timestamps: true,
  }
);

const shoppingListSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [listItemSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ShoppingList", shoppingListSchema);
