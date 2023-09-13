import sendRequest from "./send-request";
const BASE_URL = "/api/shoppinglistItem";

export async function createItem(selectedItem) {
  return sendRequest(BASE_URL, "POST", { itemData: selectedItem });
}

export async function getUserShoppingItems() {
  return sendRequest(BASE_URL);
}
