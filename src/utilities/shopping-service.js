import * as shoppingAPI from "./shoppingAPI";

export async function deleteAllItems(user) {
  // console.log("SERVICE", user)
  const res = await shoppingAPI.deleteAllItems(user);
  return res;
}

export async function deleteItem(selectedId) {
  const res = await shoppingAPI.deleteItem(selectedId);
  return res;
}

export async function getOneItem(selectedId) {
  try {
    const res = await shoppingAPI.getOneItem(selectedId);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function createItem(selectedItem) {
  try {
    console.log("shopping servoce data log", selectedItem);
    const res = await shoppingAPI.createItem(selectedItem);
    return res;
  } catch (error) {
    console.log("shopping service", error);
  }
}

export async function getUserShoppingItems() {
  try {
    const res = await shoppingAPI.getUserShoppingItems();
    console.log("S-service", res);
    return res;
  } catch (error) {
    console.log(error);
  }
}
