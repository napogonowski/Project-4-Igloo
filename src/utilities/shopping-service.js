import * as shoppingAPI from "./shoppingAPI";

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
    console.log("S-service", res)
    return res;
  } catch (error) {
    console.log(error);
  }
}
