const Schema = require("mongoose").Schema;

const categorySchema = new Schema({
  name: { type: String, required: true },
  defaultExpiry: { type: String },
  frozenExpiry: { type: String },
});
