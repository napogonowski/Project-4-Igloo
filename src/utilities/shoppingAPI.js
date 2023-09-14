import sendRequest from "./send-request";
const BASE_URL = "/api/shoppingListItem";

export async function updateItem(editItem) {
  const itemId = editItem._id;
  return sendRequest(`${BASE_URL}/${itemId}`, "PUT", editItem);
}

export async function deleteAllItems(user) {
  const userId = user._id;
  return sendRequest(`${BASE_URL}/all`, "DELETE");
}

export async function deleteItem(selectedId) {
  return sendRequest(`${BASE_URL}/${selectedId}`, "DELETE");
}

export async function getOneItem(selectedId) {
  return sendRequest(`${BASE_URL}/${selectedId}`);
}

export async function createItem(selectedItem) {
  return sendRequest(BASE_URL, "POST", { itemData: selectedItem });
}

export async function getUserShoppingItems() {
  return sendRequest(BASE_URL);
}
