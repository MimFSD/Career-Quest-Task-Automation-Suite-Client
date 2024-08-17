/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const ProductCard = ({ p }) => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl shadow-[#08e07b79]">
            <div className="relative">
                <figure className="" style={{ height: '220px', width: '100%', overflow: 'hidden' }}>
                    <img
                        src={p.productImage}
                        className="block object-cover rounded-lg h-full w-full "
                    />
                    <div className="absolute top-2 left-2">
                        <div className="bg-gradient-to-r from-[#08e07b] to-[#017a5c] rounded-md p-1 flex justify-center items-center text-white"><p className=" font-medium">{p.category}</p></div>
                    </div>
                </figure>
            </div>
            <div className="card-body ">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="card-title ">{p.productName.slice(0, 50)}</h2>
                    </div>
                    <div className="border-2 border-[#08e07b] rounded-md p-1">
                        <h2 className="text-[#08e07b]"> {new Date(p.creationDate).toLocaleDateString()}</h2>
                    </div>
                </div>

                <p>{p.description.slice(0, 80)}.....</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <h1 className="text-lg font-semibold">Brand : </h1>
                        <div className="border-2 border-[#08e07b] rounded-md p-1">
                            <h2 className="text-[#08e07b]"> {p.brandName}</h2>
                        </div>
                    </div>
                    <div className="flex gap-1 items-center">
                    <p>{p.ratings}</p>
                    <FaStar className="text-[#f3e629]" size={20}/> 
                    </div>
                </div>

                <div className="card-actions justify-between items-center">
                    <h1 className="text-xl font-bold text-[#017a5c]">$ {p.price}</h1>
                    <Link className=" px-2 btn transition-colors duration-300 transform  text-rose-100 badge bg-gradient-to-r from-[#08e07b] to-[#017a5c] hover:bg-rose-100 rounded-md text-xl ">Details</Link>
                    <Link className=" px-1 btn transition-colors duration-300 transform  text-rose-100 badge bg-gradient-to-r from-[#08e07b] to-[#017a5c] hover:bg-rose-100 rounded-md text-xl ">Add to Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;