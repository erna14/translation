import { setCookie } from "cookies-next";
import { getCookie } from "cookies-next";

export const setCookies = (name, value, days) => {
  setCookie("key", "value");
};

export const getCookies = (name) => {
  console.log(name);
  return getCookie("key") || "";
};
