import sendRequest from "./send-request";
const BASE_URL = "/api/items";

export async function createItem(formData) {
  return sendRequest(BASE_URL, "POST", { formData: formData });
}

// export async function getUserItems() {
//   //   return sendRequest(`${BASE_URL}/items`);
//   // }

export async function getUserItems() {
  return sendRequest(BASE_URL);
  // internal server error
}

export async function getOneItem(selectedId) {
  console.log("API page", selectedId);
  return sendRequest(`${BASE_URL}/${selectedId}`, "GET");
}
