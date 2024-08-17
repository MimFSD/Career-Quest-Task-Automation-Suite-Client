import { IoReload } from "react-icons/io5";
const Searching = ({ handleSearch, setReloadBtn, reloadbtn,refetch,setSearch}) => {
    
    const handleReload = ()=>{
        setReloadBtn(false)
        setSearch('')
        refetch()
    }
    return (
        <div className="flex gap-3 items-center">
            <form onSubmit={handleSearch}>
                <div className="flex gap-1 items-center">
                    <div>
                        <input type="text" name="search" placeholder="Search Product" required className="p-3 border rounded-lg" />
                    </div>
                    <div>
                        <input type="submit" className="btn bg-transparent border text-white" value="Search" />
                    </div>
                </div>
            </form>
            {
                reloadbtn &&  <div>
                    <button onClick={handleReload} className="text-gray-300 flex justify-center items-center">
                        <IoReload size={20} />
                    </button>
                </div>
            }
        </div>
    );
};

export default Searching;