import { setCookie } from "cookies-next";

export const setCookies = (name, value, days) => {
  setCookie(name, value);
};

export const getCookies = (name) => {
  console.log(name);
  return getCookie("key") || "";
};
