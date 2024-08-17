import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const Main = () => {
    return (
        <div className="font-vi">
            <div className="">
                <Navbar></Navbar>
            </div>
            <div>
                 <Outlet/>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;