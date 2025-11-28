export const governoratesMap = {
  القاهرة: "Cairo",
  الجيزة: "Giza",
  القليوبية: "Qalyubia",
  الإسكندرية: "Alexandria",
  البحيرة: "Beheira",
  مطروح: "Matrouh",
  "كفر الشيخ": "Kafr El-Sheikh",
  الغربية: "Gharbia",
  الدقهلية: "Dakahlia",
  دمياط: "Damietta",
  بورسعيد: "Port Said",
  الإسماعيلية: "Ismailia",
  السويس: "Suez",
  الشرقية: "Sharqia",
  الفيوم: "Fayoum",
  "بني سويف": "Beni Suef",
  المنيا: "Minya",
  أسيوط: "Assiut",
  سوهاج: "Sohag",
  قنا: "Qena",
  الأقصر: "Luxor",
  أسوان: "Aswan",
  "البحر الأحمر": "Red Sea",
  "الوادي الجديد": "New Valley",
  "شمال سيناء": "North Sinai",
  "جنوب سيناء": "South Sinai",
  المنوفية: "Monufia",
};

export function translateGovernorate(name, locale) {
  if (locale === "ar") return name;

  // English mode
  return governoratesMap[name] || name;
}
