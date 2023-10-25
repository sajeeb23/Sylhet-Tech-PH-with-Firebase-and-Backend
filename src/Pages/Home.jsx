import Banner from "../Header/Banner";
import Brands from "../Components/Brands";
import SiteDescription from "../Components/SiteDescription";
import TopProducts from "../Components/TopProducts";
import { useState, useEffect } from "react";
import { MdDarkMode } from 'react-icons/md';

const Home = () => {
    const [mode, setMode] = useState("light");

    useEffect(() => {
        document.body.className = mode;
    }, [mode]);

    function changeTheme() {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    }

    return (
        <div className={`${mode === "light" ? 'bg-white' : 'bg-slate-800'} text-${mode === "light" ? 'text-black' : 'text-white'}`}>
            <div className="flex items-center justify-center h-full">
                <button className="btn btn-ghost text-center" onClick={changeTheme}>
                    <MdDarkMode /> Change Theme
                </button>
            </div>
            <Banner />
            <Brands />
            <TopProducts />
            <SiteDescription />
        </div>
    );
};

export default Home;
