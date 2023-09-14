import * as shoppingAPI from "./shoppingAPI";

export async function updateItem(editItem) {
  const res = await shoppingAPI.updateItem(editItem);
  return res;
}

export async function deleteAllItems(user) {
  const res = await shoppingAPI.deleteAllItems(user);
  return res;
}

export async function deleteItem(selectedId) {
  const res = await shoppingAPI.deleteItem(selectedId);
  return res;
}

export async function getOneItem(selectedId) {
  const res = await shoppingAPI.getOneItem(selectedId);
  return res;
}

export async function createItem(selectedItem) {
  const res = await shoppingAPI.createItem(selectedItem);
  return res;
}

export async function getUserShoppingItems() {
  try {
    const res = await shoppingAPI.getUserShoppingItems();
    return res;
  } catch (error) {
    console.log(error);
  }
}
