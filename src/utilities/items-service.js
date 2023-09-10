import * as itemsAPI from "./itemsAPI";

export async function createItem(formData) {
  try {
    const res = await itemsAPI.createItem(formData);
    console.log("Items-service page ", res);
    return res;
  } catch (error) {
    throw new Error("Error creating item");
  }
}
