import { NextResponse } from "next/server";
import { getCookies, setCookies } from "./app/cookie";
import { cookies } from "next/headers";
let locales = ["en", "bs"];

function getLocale(request) {
  // const cookieLang = getCookies("lang");
  const cookieLang = request.cookies.get('lang')?.value;
  if (cookieLang && locales.includes(cookieLang)) {
    return cookieLang;
  }

  const acceptLanguage = request.headers.get("Accept-Language");
  const preferredLocale = acceptLanguage
    ? acceptLanguage.split(",")[0].trim()
    : "en";
  return locales.includes(preferredLocale) ? preferredLocale : "en";
}
export function middleware(request) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}`;

  setCookies("lang", locale, 365);
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
