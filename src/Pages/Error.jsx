import { Link } from "react-router-dom";
import { GiBlood } from "react-icons/gi";
const Error = () => {
    return (
        <div>
            <section className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center w-[60%]">
                    <GiBlood size={220} className="text-[#017a5c]"/>
                    <p className="text-3xl">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <Link to='/' rel="noopener noreferrer" href="#" className="px-8 font-semibold btn text-xl transition-colors duration-300 transform  text-rose-100 badge bg-gradient-to-r from-[#08e07b] to-[#017a5c] hover:bg-rose-100 rounded-md  hover:text-[#017a5c]">Back to homepage</Link>
                </div>
            </section>
        </div>
    );
};

export default Error;