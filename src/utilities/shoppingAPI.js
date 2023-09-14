import sendRequest from "./send-request";
const BASE_URL = "/api/shoppingListItem";

export async function updateItem(editItem) {
  const itemId = editItem._id;
  console.log("send request post ", itemId)
  return sendRequest(`${BASE_URL}/${itemId}`, "PUT", editItem);
}

export async function deleteAllItems(user) {
  const userId = user._id;
  // console.log("send request ", userId)
  return sendRequest(`${BASE_URL}/${userId}, "DELETE" `);
}

export async function deleteItem(selectedId) {
  console.log("API page", selectedId);
  return sendRequest(`${BASE_URL}/${selectedId}`, "DELETE");
}

export async function getOneItem(selectedId) {
  return sendRequest(`${BASE_URL}/${selectedId}`);
}

export async function createItem(selectedItem) {
  // console.log("API LOG", selectedItem);
  return sendRequest(BASE_URL, "POST", { itemData: selectedItem });
}

export async function getUserShoppingItems() {
  return sendRequest(BASE_URL);
}
