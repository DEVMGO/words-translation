import { Link, useLocation } from "react-router-dom";
import { useLanguage, type Language } from "../context/context";
import SelectLanguage from "./select-lang";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';


const Navbar = ({ title }: { title: string }) => {
    const location = useLocation();
    const pathname = location.pathname;
    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = (newValue: string | null) => {
        if (newValue) {
            setLanguage(newValue as Language);
            localStorage.setItem('currentLanguage', newValue)
        }
    };

    return (
        <div dir="ltr" className="w-full flex items-center justify-center border-b border-gray-200 sticky top-0 left-0 bg-white z-10">
            <div className="w-full max-w-[90rem] md:h-20 h-16 px-6 flex items-center justify-between">
                <div className="sm:w-24 w-auto">
                    <Link to={pathname === '/' ? "/management" : '/'} className="block w-9">
                        {pathname === '/' ?
                            <img
                                src="/images/management-icon1.png"
                                alt="management"
                                className="size-9 object-cover"
                                title="mangement"
                            />
                            :
                            <KeyboardBackspaceRoundedIcon fontSize="large" className="w-9 h-3" />
                        }
                    </Link>
                </div>
                <h1 className="font-bold sm:text-2xl text-lg text-[#090333]">{title}</h1>
                <SelectLanguage language={language} handleLanguageChange={handleLanguageChange} />
            </div>
        </div>
    )
}

export default Navbar