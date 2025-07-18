import { Avatar, ListDivider, ListItemDecorator, Option, Select, selectClasses, type SelectOption } from "@mui/joy"
import { Fragment } from "react/jsx-runtime";

const SelectLanguage = ({
    language,
    handleLanguageChange
}: {
    language: string,
    handleLanguageChange: (newValue: string | null) => void
}) => {
    const options = [
        { value: 'fa', label: 'فارسی', src: '/images/ir.svg' },
        { value: 'en', label: 'English', src: '/images/gb.svg' },
        { value: 'ru', label: 'Русский', src: '/images/ru.svg' },
    ];

    function renderValue(option: SelectOption<string> | null) {
        if (!option) {
            return language;
        }

        return (
            <Fragment>
                <ListItemDecorator>
                    <Avatar size="sm" src={options.find((o) => o.value === option.value)?.src} sx={{ marginRight: '8px', border: '2px solid #fff' }} />
                </ListItemDecorator>
                <p className="sm:text-base text-xs text-gray-900 hidden sm:block">{option.label}</p>
            </Fragment>
        );
    }

    return (
        <Select
            renderValue={renderValue}
            onChange={(_event, newValue) => handleLanguageChange(newValue)}
            indicator=''
            sx={{
                width: { xs: '36px', sm: '98px' },
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
                padding: '0px',
            }}
            defaultValue={language}
            slotProps={{
                listbox: {
                    placement: 'bottom-start',
                },
            }}
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
    )
}

export default SelectLanguage