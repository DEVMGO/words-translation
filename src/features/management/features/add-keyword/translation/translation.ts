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
    en: 'Tip: First select your desired language from the drop-down menu, then enter the equivalent word in the box below. After entering the translation, press the "Save" button.',
    fa: 'راهنمایی: ابتدا زبان موردنظر خود را از منوی کشویی انتخاب کنید، سپس معادل کلمه را در کادر زیر وارد کنید. پس از وارد کردن ترجمه، دکمه "ثبت" را فشار دهید',
    ru: "Совет: Сначала выберите нужный язык в раскрывающемся меню, затем введите эквивалентное слово в поле ниже. После ввода перевода нажмите кнопку «Сохранить».",
  },
  backButton: {
    en: "Back",
    fa: "بازگشت",
    ru: "Назад",
  },
  submitButton: {
    en: "Submit",
    fa: "ثبت",
    ru: "Создавать",
  },
  placeholderWord: {
    en: "New word",
    fa: "کلمه جدید",
    ru: "Новое слово",
  },
  placeholderTranslation: {
    en: "Enter your translation...",
    fa: "ترجمه خود را وارد کنید...",
    ru: "Введите ваш перевод.",
  },
};
