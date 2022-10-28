import { Cookie, Capriola, Bellota } from "@next/font/google";

export default function globalFonts() {
  const fonts = {
    cookie: Cookie(),
    capriola: Capriola(),
    bellota: Bellota(),
  };
  return fonts;
}
