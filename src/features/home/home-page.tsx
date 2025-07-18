import Navbar from "../../layout/navbar";
import { useLanguage } from "../../context/context";
import WordList from "./components/words-list"
import { translations } from "./translation/translation";


const HomePage = () => {
    const { language } = useLanguage();

    return (
        <>
            <Navbar title={translations[language]} />
            <div className='w-full flex items-center justify-start flex-col gap-4 sm:pb-5 pb-28'>
                <div className="w-full sm:max-w-72 flex items-center justify-start flex-col sm:px-0 pt-5 p-5 gap-5">
                    <WordList />
                </div>
            </div>
        </>
    )
}

export default HomePage