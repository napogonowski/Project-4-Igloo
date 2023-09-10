const Schema = require("mongoose").Schema;

const itemSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    qty: String,
    expDate: { type: Date, required: true },
    frozen: { type: Boolean, required: true },
    // frozen 
    // category: { type: Schema.Types.ObjectId, ref: "Category" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    // location / 
  },
  {
    timestamps: true,
  }
);

module.exports = itemSchema;
