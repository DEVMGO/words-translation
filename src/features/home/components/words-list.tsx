import { useEffect, useState } from 'react';
import { useLanguage, type Language } from '../../../context/context';
import WordCard from './word-card';
import SelectLanguage from '../../shared/select-language';

interface Word {
    id: number;
    en: string;
    fa: string;
    ru: string;
}

const WordList = () => {
    const { language: defaultLanguage } = useLanguage();
    const [words, setWords] = useState<Word[]>([]);
    const languageHome = localStorage.getItem('languageHome') as Language
    const [language, setLanguage] = useState<Language>(languageHome || 'fa');

    useEffect(() => {
        const storedWords = localStorage.getItem('translations');
        if (storedWords) {
            setWords(JSON.parse(storedWords).words);
        } else {
            fetch('/translations/translations.json')
                .then((res) => res.json())
                .then((data) => {
                    setWords(data.words);
                    localStorage.setItem('translations', JSON.stringify(data));
                });
        }
    }, []);

    const handleLanguageChange = (newValue: string | null) => {
        if (newValue) {
            setLanguage(newValue as Language);
            localStorage.setItem('languageHome', newValue)
        }
    };

    return (
        <div className="w-full flex items-center justify-start flex-col">
            <SelectLanguage
                language={language}
                defaultLanguage={defaultLanguage}
                handleLanguageChange={handleLanguageChange}
            />
            <ul className='w-full flex items-center justify-start flex-col gap-2'>
                {words.map((word) => (
                    word[language]?.trim() !== '' ? (
                        <li key={word.id} className='w-full'>
                            <WordCard
                                language={defaultLanguage}
                                word={word[language]}
                                translation={word[defaultLanguage]}
                            />
                        </li>
                    ) : null
                ))}
            </ul>
        </div>
    );
};

export default WordList;