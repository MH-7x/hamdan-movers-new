import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function detectLocaleBasedOnCountry(country: string) {
  const arabicCountries = [
    "SA", // Saudi Arabia
    "AE", // United Arab Emirates
    "EG", // Egypt
    "QA", // Qatar
    "KW", // Kuwait
    "OM", // Oman
    "JO", // Jordan
    "LB", // Lebanon
    "DZ", // Algeria
    "MA", // Morocco
    "TN", // Tunisia

    // Add more Arabic-speaking countries as needed
  ];

  return arabicCountries.includes(country) ? "ar" : "en";
}

export async function getCountryFromIP() {
  try {
    const response = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IP_GEO_LOCATION_API_KEY}&fields=country_code2`
    );

    if (response.ok) {
      const data = await response.json();
      return data.country_code2;
    }
    return null;
  } catch (reson) {
    console.log(reson);
    return null;
  }
}
