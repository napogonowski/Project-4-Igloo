import * as itemsAPI from "./itemsAPI";

export async function createItem(formData) {
  try {
    const res = await itemsAPI.createItem(formData);
    // console.log("Items-service page ", res);
    return res;
  } catch (error) {
    throw new Error("Error creating item");
  }
}

export async function getUserItems() {
  try {
    const res = await itemsAPI.getUserItems();
    console.log("item-Service.js", res);
    return res;
  } catch (error) {
    throw new Error(" GetuserItem function: No Item found");
  }
}

export async function getOneItem(selectedId) {
  // console.log("^^^", selectedId);
  const res = await itemsAPI.getOneItem(selectedId);
  console.log("Item-Service page", res);
  return res;
}

export async function deleteItem(selectedId) {
  const res = await itemsAPI.deleteItem(selectedId);
  return res;
}

export async function editItem(editItem){
  console.log("item Service page", editItem)
  const res = await itemsAPI.editItem(editItem)
  return res; 
}
