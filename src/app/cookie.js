import { setCookie } from "cookies-next";
import { getCookie } from "cookies-next";

export const setCookies = (name, value, days) => {
console.log('vakue', value)
  if (typeof document === "undefined") return 
  document.cookie =  `lang=${value}`;
};
