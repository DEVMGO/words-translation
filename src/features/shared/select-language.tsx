import { Avatar, ListDivider, ListItemDecorator, Option, Select, selectClasses, type SelectOption } from "@mui/joy"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Fragment } from "react/jsx-runtime";
import type { Language } from "../../context/context";

const translations: Record<Language, string> = {
    en: 'What language do you want the words in?',
    fa: 'کلمات چه زبانی را میخواهید؟',
    ru: 'На каком языке вы хотите, чтобы были слова?',
};

const SelectLanguage = ({
    language,
    defaultLanguage,
    handleLanguageChange
}: {
    language: Language,
    defaultLanguage: Language,
    handleLanguageChange: (newValue: string | null) => void
}) => {
    const options = [
        { value: 'fa', label: 'Persian', src: '/images/ir.svg' },
        { value: 'en', label: 'english', src: '/images/gb.svg' },
        { value: 'ru', label: 'russian', src: '/images/ru.svg' },
    ];

    function renderValue(option: SelectOption<string> | null) {
        if (!option) {
            return language || 'fa';
        }

        return (
            <Fragment>
                <ListItemDecorator>
                    <Avatar
                        size="sm"
                        src={options.find((o) => o.value === option.value)?.src}
                        sx={{ border: '2px solid #fff' }}
                    />
                </ListItemDecorator>
                <p className="text-white mx-2">{option.label}</p>
            </Fragment>
        );
    }

    return (
        <div className='sm:w-72 w-full p-4 rounded-xl bg-gradient-to-tl from-[#4a42b4] to-[#5679cd] mb-6 space-y-3'>
            <p className='text-base text-white font-bold'>{translations[defaultLanguage]}</p>
            <Select
                renderValue={renderValue}
                onChange={(_event, newValue) => handleLanguageChange(newValue)}
                indicator={<KeyboardArrowDownIcon sx={{ color: '#fff' }} />}
                sx={{
                    [`& .${selectClasses.indicator}`]: {
                        transition: '0.2s',
                        [`&.${selectClasses.expanded}`]: {
                            transform: 'rotate(-180deg)',
                        },
                    },
                    background: 'transparent',
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                    border: 'none',
                    boxShadow: "none",
                    padding: '0px'
                }}
                defaultValue={language || 'fa'}
            >
                {options.map((option, index) => (
                    <div key={option.value}>
                        {index !== 0 ? <ListDivider role="none" inset="startContent" /> : null}
                        <Option value={option.value} label={option.label}>
                            <ListItemDecorator>
                                <Avatar size="sm" src={option.src} />
                            </ListItemDecorator>
                            {option.label}
                        </Option>
                    </div>
                ))}
            </Select>
        </div>
    )
}

export default SelectLanguage