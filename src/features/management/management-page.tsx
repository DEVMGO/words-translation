import { useLanguage } from "../../context/context";
import Navbar from "../../layout/navbar";
import { Link } from "react-router-dom";
import WordList from "./components/words-list"
import { translations } from "./translation/translation";
import AddIcon from '@mui/icons-material/Add';

const ManagementPage = () => {
    const { language } = useLanguage();

    return (
        <>
            <Navbar title={translations['title'][language]} />
            <div className="w-full flex items-center justify-start flex-col sm:pb-5 pb-28">
                <div className="w-full sm:max-w-72 flex items-center justify-start flex-col sm:px-0 pt-5 p-5 gap-5">
                    <WordList />
                    <div className="w-full sm:block sm:sticky fixed bottom-0 left-0 sm px-0 p-5 sm:border-none border-t border-gray-300 bg-white">
                        <Link
                            to='add-keyword'
                            className="w-full rounded-xl bg-gradient-to-tl from-[#4a42b4] to-[#5679cd] 
                            text-white text-base font-bold flex items-center justify-center py-2 gap-1"
                        >
                            <AddIcon className="mb-0.5" /> {translations['button'][language]}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManagementPage