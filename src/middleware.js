import { NextResponse } from "next/server";
import {getCookies, setCookies} from './app/cookie'
let locales = ["en", "bs"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
  // Pokušaj pročitati jezik iz kolačića
  const cookieLang = getCookies("lang");

  if (cookieLang && locales.includes(cookieLang)) {
    return cookieLang;
  }

  // Inače, koristi Accept-Language header
  const acceptLanguage = request.headers.get("Accept-Language");
  const preferredLocale = acceptLanguage
    ? acceptLanguage.split(",")[0].trim()
    : "en";
  return locales.includes(preferredLocale) ? preferredLocale : "en";
}
export function middleware(request) {
  // Provjeri postoji li podržani jezik u URL-u
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
 
  if (pathnameHasLocale) return;

  // Preusmjeri ako nema jezika u URL-u
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}`;
  
  // Postavi jezik u kolačić
  setCookies('lang', locale, 365); // Postavi kolačić na 365 dana ili na željenu trajnost
  return NextResponse.redirect(request.nextUrl);
}


export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
