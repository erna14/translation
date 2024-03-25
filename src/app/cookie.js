
export const setCookies = (name, value, days) => {
console.log('vakue', value)
  if (typeof document === "undefined") return 
  document.cookie =  `lang=${value}`;
};
