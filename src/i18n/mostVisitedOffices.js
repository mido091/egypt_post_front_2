// English translations for Most Visited Offices
export const mostVisitedOfficesTranslations = {
  "شبرا فرعي": "Shubra Branch",
  "القاهره الرئيسي": "Cairo Main Office",
  "الحي السادس - مدينة نصر": "Sixth District - Nasr City",
  "باب الخلق": "Bab El-Khalq",
  السعوديه: "Al-Saudiya",
  اسكر: "Askar",
};

/**
 * Translates office name for Most Visited Offices section
 * @param {string} arabicName - The Arabic office name
 * @param {string} locale - Current locale ('ar' or 'en')
 * @returns {string} - Translated name or original if not found
 */
export function translateOfficeName(arabicName, locale) {
  if (locale === "ar" || !arabicName) {
    return arabicName;
  }

  // Return English translation if available, otherwise fallback to Arabic
  return mostVisitedOfficesTranslations[arabicName] || arabicName;
}
