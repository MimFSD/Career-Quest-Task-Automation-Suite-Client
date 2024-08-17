/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";
const Category = ({ handleApply, setSelectedBrands, setSelectedCategories, selectedCategories, selectedBrands, setMinPrice, setMaxPrice, setMinPriceFocused, setMaxPriceFocused, minPrice, maxPrice,handleClear }) => {

    const { data: Brands = [], isLoading } = useQuery({
        queryKey: ['Brands'],
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/All-brand`);
            return data;
        }
    });

    const { data: Categories = [] } = useQuery({
        queryKey: ['Categories'],
        queryFn: async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/All-category`);
            return data;
        }
    });

    const handleBrandChange = (e) => {
        const { checked, value } = e.target;
        setSelectedBrands(prev =>
            checked ? [...prev, value] : prev.filter(item => item !== value)
        );
    };

    const handleCategoryChange = (e) => {
        const { checked, value } = e.target;
        setSelectedCategories(prev =>
            checked ? [...prev, value] : prev.filter(item => item !== value)
        );
    };

    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
        setMinPriceFocused(true);
    };

    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
        setMaxPriceFocused(true);
    };

  

    return (
        <>
            <div className="dropdown  w-72 md:w-48 lg:w-52">
                <div tabIndex={0} role="button" className="btn m-1 flex bg-white justify-between items-center">Filter <IoIosArrowDown /></div>
                <ul tabIndex={0} className="dropdown-content bg-base-100 rounded-box z-[1] w-56 md:w-[430px] lg:min-w-[600px] p-2 shadow">
                    <div>
                        <p className="my-2 text-lg font-bold text-[#017a5c]">* Brand Name</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Brands.map(b => (
                                <div key={b._id} className="form-control">
                                    <label className="cursor-pointer label">
                                        <input
                                            type="checkbox"
                                            className="checkbox checkbox-success"
                                            value={b.name}
                                            checked={selectedBrands.includes(b.name)}
                                            onChange={handleBrandChange}
                                        />
                                        <span className="">{b.name}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="my-2 text-lg font-bold text-[#017a5c]">* Category Name</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Categories.map(c => (
                                <div key={c._id} className="form-control">
                                    <label className="cursor-pointer label">
                                        <input
                                            type="checkbox"
                                            className="checkbox checkbox-success"
                                            value={c.category}
                                            checked={selectedCategories.includes(c.category)}
                                            onChange={handleCategoryChange}
                                        />
                                        <span className="">{c.category}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="my-2 text-lg font-bold text-[#017a5c]">* Price Range</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input
                                    type="number"
                                    onChange={handleMinPriceChange}
                                    placeholder="Min Price"
                                    className="border p-2 rounded-lg"
                                    value={minPrice}
                                    onFocus={() => setMinPriceFocused(true)}
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    onChange={handleMaxPriceChange}
                                    placeholder="Max Price"
                                    className="border p-2 rounded-lg"
                                    value={maxPrice}
                                    onFocus={() => setMaxPriceFocused(true)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <button className="btn text-white bg-gradient-to-r from-[#08e07b] to-[#017a5c]" onClick={handleClear}>
                            Clear All
                        </button>
                        <button className="btn text-white bg-gradient-to-r from-[#08e07b] to-[#017a5c]" onClick={handleApply}>
                            Apply
                        </button>
                    </div>
                </ul>
            </div>
        </>
    );
};

export default Category;
