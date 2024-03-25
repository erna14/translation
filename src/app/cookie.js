import { setCookie } from "cookies-next";
import { getCookie } from "cookies-next";

export const setCookies = (name, value, days) => {
  setCookie(name, value);
};
