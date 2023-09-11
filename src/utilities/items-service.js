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

export async function getUserItems() {
  try {
    const res = await itemsAPI.getUserItems();
    console.log("User-Service.js", res);
    return res;
  } catch (error) {
    throw new Error("No Items found");
  }
}