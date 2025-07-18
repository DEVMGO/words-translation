import { Button, Input, Option, Select } from "@mui/joy";
import Navbar from "../../../../layout/navbar";
import { useLanguage, type Language } from "../../../../context/context";
import { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { toast } from "react-toastify";
import { translations } from "./translation/translation";

interface Word {
    id: number;
    en: string;
    fa: string;
    ru: string;
}

const AddKeyWordPage = () => {
    const { language } = useLanguage();
    const [langTranslation, setLangTranslation] = useState<Language>(language === 'en' ? 'fa' : 'en');
    const [word, setWord] = useState({ title: '', translation: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWord({ ...word, [e.target.name]: e.target.value });
    };

    const handleLanguageChange = (newValue: string | null) => {
        if (newValue) {
            setLangTranslation(newValue as Language);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const storedWords = JSON.parse(localStorage.getItem('translations') || '{"words": []}').words as Word[];

        const keyword: Word = {
            id: storedWords.length + 1,
            en: '',
            fa: '',
            ru: '',
            [language]: word.title,
            [langTranslation]: word.translation,
        };

        const newWord: Word = {
            id: storedWords.length + 1,
            en: keyword.en,
            fa: keyword.fa,
            ru: keyword.ru,
        };
        const updatedWords = [...storedWords, newWord];
        localStorage.setItem('translations', JSON.stringify({ words: updatedWords }));

        setWord({ title: '', translation: '' });
        toast.success('کلمه جدید با موفقیت اضافه شد.');
    };

    return (
        <>
            <Navbar title={translations['title'][language]} />
            <div className="w-full flex items-center justify-start flex-col">
                <div className="w-full sm:max-w-72 flex items-center justify-start flex-col py-5 sm:px-0 px-5 gap-5">
                    <div className="w-full flex justify-end" dir="rtl">
                        <Link to="/management" className="text-xs text-gray-400 flex items-center gap-1">
                            {translations['backButton'][language]} <KeyboardBackspaceRoundedIcon />
                        </Link>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 pt-4">
                        <Input
                            name="title"
                            value={word.title}
                            onChange={handleChange}
                            placeholder={translations['placeholderWord'][language]}
                            required
                        />
                        <div className="w-full flex items-center gap-2">
                            <label className="text-base text-black font-bold">{translations['subTitle'][language]}</label>
                            <hr className="w-full" />
                        </div>
                        <p className="text-xs text-gray-400 leading-5">{translations['tipText'][language]}</p>
                        <Select
                            value={langTranslation}
                            onChange={(_event, newValue) => handleLanguageChange(newValue)}
                            placeholder="Select Language"
                            sx={{
                                backgroundColor: 'transparent',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                            }}
                            aria-label="Select language"
                        >
                            <Option value="en">English</Option>
                            <Option value="fa">Persian</Option>
                            <Option value="ru">Russian</Option>
                        </Select>
                        <Input
                            name="translation"
                            value={word.translation}
                            onChange={handleChange}
                            placeholder={translations['placeholderTranslation'][language]}
                            required
                        />
                        <Button
                            type="submit"
                            sx={{
                                width: '100%',
                                background: 'linear-gradient(90deg, rgba(86, 121, 205, 1) 0%, rgba(74, 66, 180, 1) 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '6px',
                                color: '#fff',
                                fontSize: '1rem',
                                padding: '.5rem 0',
                            }}
                        >
                            {translations['submitButton'][language]}
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddKeyWordPage;
