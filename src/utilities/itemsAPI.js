import sendRequest from "./send-request";
const BASE_URL = "/api/items";

// does this need to be / new ?
export async function createItem(formData) {
  return sendRequest(BASE_URL, "POST", { formData: formData });
}
