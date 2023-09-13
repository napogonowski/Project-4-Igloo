import sendRequest from "./send-request";
const BASE_URL = "/api/shoppinglist";

export async function createItem(selectedItem) {
  return sendRequest(BASE_URL, "POST", { itemData: selectedItem });
}
