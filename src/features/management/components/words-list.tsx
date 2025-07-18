import { useEffect, useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import WordCard from './word-card';
import { useLanguage, type Language } from '../../../context/context';
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
    const languageManagement = localStorage.getItem('languageManagement') as Language
    const [language, setLanguage] = useState<Language>(languageManagement || 'fa');

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
            localStorage.setItem('languageManagement', newValue)
        }
    };


    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            setWords((prevWords) => {
                const oldIndex = prevWords.findIndex((word) => word.id.toString() === active.id);
                const newIndex = prevWords.findIndex((word) => word.id.toString() === over.id);
                const newWords = arrayMove(prevWords, oldIndex, newIndex);
                localStorage.setItem('translations', JSON.stringify({ words: newWords }));
                return newWords;
            });
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
                <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={words.map((word) => word.id.toString())} strategy={verticalListSortingStrategy}>
                        {words.map((word) => (
                            word[language]?.trim() !== '' ? (
                                <li key={word.id} className='w-full'>
                                    <WordCard
                                        id={word.id}
                                        language={defaultLanguage}
                                        sourceLangouage={language}
                                        word={word[language]}
                                        translation={word[defaultLanguage]}
                                    />
                                </li>
                            ) : null
                        ))}
                    </SortableContext>
                </DndContext>
            </ul>
        </div>
    );
};

export default WordList;