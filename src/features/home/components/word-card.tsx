import type { Language } from "../../../context/context";

const translations: Record<Language, string> = {
    en: 'No translation yet',
    fa: 'هنوز ترجمه نشده',
    ru: 'перевода пока нет',
};

const WordCard = ({ language, word, translation }: { language: Language, word: string, translation: string }) => {
    return (
        <div
            className={`w-full sm:max-w-72 flex items-start justify-start flex-col gap-2 p-3 rounded-lg
            ${translation ? 'bg-[#f0f5ff]' : 'bg-gray-100'}`}
        >
            <p className="text-base text-gray-900 font-bold">{word}</p>
            <p className="text-sm text-gray-700 font-medium">{translation ? translation : translations[language]}</p>
        </div>
    )
}

export default WordCard