import { Button, Input } from "@mui/joy";
import Navbar from "../../../../layout/navbar";
import { useLanguage, type Language } from "../../../../context/context";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { toast } from "react-toastify";
import { translations } from "./translation/translation";

interface Word {
    id: number;
    en: string;
    fa: string;
    ru: string;
}

const availableLanguages: Language[] = ['en', 'fa', 'ru'];

const EditKeyWordPage = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { search } = useLocation();
    const { language: defaultLanguage } = useLanguage();
    const [word, setWord] = useState({ title: '', translation: '' });
    const editId = Number(id);
    const queryParams = new URLSearchParams(search);
    const sourceLanguage = (queryParams.get('source') as Language) || 'en';


    useEffect(() => {
        if (editId && availableLanguages.includes(sourceLanguage)) {
            const storedWords = JSON.parse(localStorage.getItem('translations') || '{"words": []}').words as Word[];
            const wordToEdit = storedWords.find((w) => w.id === editId);
            if (wordToEdit) {
                setWord({
                    title: wordToEdit[sourceLanguage],
                    translation: wordToEdit[defaultLanguage],
                });
            } else {
                toast.error('کلمه‌ای با این شناسه یافت نشد.');
                navigate('/management');
            }
        } else {
            toast.error('زبان یا شناسه نامعتبر است.');
            navigate('/management');
        }
    }, [editId, sourceLanguage, defaultLanguage, navigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWord({ ...word, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const storedWords = JSON.parse(localStorage.getItem('translations') || '{"words": []}').words as Word[];

        const updatedWords = storedWords.map((w) =>
            w.id === editId
                ? {
                    ...w,
                    [defaultLanguage]: word.translation,
                }
                : w
        );
        localStorage.setItem('translations', JSON.stringify({ words: updatedWords }));
        toast.success('ترجمه با موفقیت ویرایش شد.');

        setWord({ title: '', translation: '' });
        navigate('/management');
    };

    return (
        <>
            <Navbar title={translations['title'][defaultLanguage]} />
            <div className="w-full flex items-center justify-start flex-col">
                <div className="w-full sm:max-w-72 flex items-center justify-start flex-col py-5 sm:px-0 px-5 gap-5">
                    <div className="w-full flex justify-end" dir="rtl">
                        <Link to="/management" className="text-xs text-gray-400 flex items-center gap-1">
                            {translations['backButton'][defaultLanguage]} <KeyboardBackspaceRoundedIcon />
                        </Link>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 pt-4">
                        <Input
                            name="title"
                            value={word.title}
                            disabled
                            placeholder={translations['placeholderWord'][defaultLanguage]}
                            sx={{ fontSize: { xs: '18px', sm: '20px' } }}
                        />
                        <div className="w-full flex items-center gap-2">
                            <label className="text-base text-black font-bold">{translations['subTitle'][defaultLanguage]}</label>
                            <hr className="w-full" />
                        </div>
                        <p className="text-xs text-gray-400 leading-5">{translations['tipText'][defaultLanguage]}</p>
                        <Input
                            name="translation"
                            value={word.translation}
                            onChange={handleChange}
                            placeholder={translations['placeholderTranslation'][defaultLanguage]}
                            required
                            sx={{ fontSize: '12px' }}
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
                            {translations['editButton'][defaultLanguage]}
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditKeyWordPage;