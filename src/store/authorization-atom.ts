import { atom } from "jotai";
import Cookies from "js-cookie";

export function checkIsLoggedIn() {
  const token = Cookies.get("AUTH_TOKEN");
  const user = Cookies.get("USER");
  if (!token) return false;
  return true;
}
export const authorizationAtom = atom(checkIsLoggedIn());
