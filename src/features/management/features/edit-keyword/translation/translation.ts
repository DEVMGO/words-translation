interface Translation {
  en: string;
  fa: string;
  ru: string;
}

export const translations: Record<string, Translation> = {
  title: {
    en: "Translation Management",
    fa: "مدیریت ترجمه",
    ru: "Управление переводами",
  },
  button: {
    en: "Add Keyword",
    fa: "افزودن کلمه",
    ru: "Добавить слово",
  },
  subTitle: {
    en: "Translation",
    fa: "ترجمه",
    ru: "Перевод",
  },
  tipText: {
    en: 'Edit the translation for the selected word in your language, then press the "Edit keyword" button to save changes.',
    fa: 'ترجمه کلمه انتخاب‌شده را به زبان خود ویرایش کنید، سپس دکمه "ویرایش" را برای ذخیره تغییرات فشار دهید.',
    ru: "Отредактируйте перевод выбранного слова на вашем языке, затем нажмите кнопку «Редактировать», чтобы сохранить изменения.",
  },
  backButton: {
    en: "Back",
    fa: "بازگشت",
    ru: "Назад",
  },
  editButton: {
    en: "Edit keyword",
    fa: "ویرایش",
    ru: "Редактировать",
  },
  placeholderWord: {
    en: "Not a word",
    fa: "کلمه‌ای وجود ندارد",
    ru: "Ни слова.",
  },
  placeholderTranslation: {
    en: "Enter your translation...",
    fa: "ترجمه خود را وارد کنید...",
    ru: "Введите ваш перевод.",
  },
};
