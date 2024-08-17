import { HashLoader } from 'react-spinners'
const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <HashLoader color='green' size={100}/>
        </div>
    );
};

export default Loader;