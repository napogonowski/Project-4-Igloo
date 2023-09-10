import { getToken } from "./users-service";

export default async function sendRequest(url, method = "GET", payload = null) {
  // fetch accepts an options object as the 2nd arg.
  // used 2 include data payload + set headers + specifiy the method ect.
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    // need to add an authorization header
    // use the logical OR assignment operator
    options.headers ||= {};
    // add token to authorization header
    // prefacing with "bearer" is recommended practice
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  // if res.ok = false -> something went wrong
  if (res.ok) return res.json();
  throw new Error("Bad Request");
}
