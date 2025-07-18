import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Link } from "react-router-dom";
import EditIcon from "../../../assets/icons/edit-icon"
import type { Language } from "../../../context/context";
import type { FC } from 'react';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const translations: Record<Language, string> = {
    en: 'No translation yet',
    fa: 'هنوز ترجمه نشده',
    ru: 'перевода пока нет',
};

interface SortableWordCardProps {
    id: number,
    language: Language,
    word: string,
    translation: string,
    sourceLangouage: Language
}

const WordCard: FC<SortableWordCardProps> = ({
    id, language, word, translation, sourceLangouage
}) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id.toString() });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef} style={style}
            className={`w-full sm:max-w-72 flex items-center justify-start gap-2 p-3 rounded-lg
            ${translation ? 'bg-[#f0f5ff]' : 'bg-gray-100'}`}
        >
            <div
                {...listeners}
                {...attributes}
                style={{ touchAction: 'none' }}
                className="cursor-grab active:cursor-grabbing"
            >
                <DragIndicatorIcon color='action' />
            </div>
            <div className='w-full flex items-end justify-between gap-2'>
                <div className="flex items-start justify-center flex-col gap-2">
                    <p className="text-base text-gray-900 font-bold">{word}</p>
                    <p className="text-sm text-gray-700 font-medium">{translation ? translation : translations[language]}</p>
                </div>
                <Link to={`/management/edit-keyword/${id}?source=${sourceLangouage}`}>
                    <EditIcon />
                </Link>
            </div>
        </div>
    )
}

export default WordCard