const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    qty: String,
    expDate: { type: Date, required: true },
    fridge: { type: Boolean, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", itemSchema);
