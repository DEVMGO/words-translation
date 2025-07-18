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
};
