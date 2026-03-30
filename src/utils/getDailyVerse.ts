import { verses } from "@/data/verses";

export function getDailyVerse() {
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Lima" })
  );

  // 👉 Fecha base: hoy (29 de marzo 2026)
  const baseDate = new Date(2026, 2, 29); // mes 2 = marzo

  const diff = now.getTime() - baseDate.getTime();
  const oneDay = 1000 * 60 * 60 * 24;

  const dayCount = Math.floor(diff / oneDay); // día 0,1,2,...

  const index = dayCount % verses.length;

  return verses[index];
}