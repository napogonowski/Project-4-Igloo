const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoppingListItemSchema = new Schema(
  {
    name: { type: String, required: true },
    qty: { type: Number, default: 1 },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ShoppingListItem", shoppingListItemSchema);
