import * as itemsAPI from "./itemsAPI";

export async function createItem(formData) {
  try {
    const res = await itemsAPI.createItem(formData);
    return res;
  } catch (error) {
    throw new Error("Error creating item");
  }
}

export async function getUserItems() {
  try {
    const res = await itemsAPI.getUserItems();
    return res;
  } catch (error) {
    throw new Error(" GetuserItem function: No Item found");
  }
}

export async function getOneItem(selectedId) {
  const res = await itemsAPI.getOneItem(selectedId);
  return res;
}

export async function deleteItem(selectedId) {
  const res = await itemsAPI.deleteItem(selectedId);
  return res;
}

export async function editItem(editItem) {
  const res = await itemsAPI.editItem(editItem);
  return res;
}
