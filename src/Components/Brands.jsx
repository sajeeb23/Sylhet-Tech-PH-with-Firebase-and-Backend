import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const Brands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('https://assignment-10-server-76tu83fuc-sjb.vercel.appbrands')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBrands(data);
            })

    }, [])
    return (

        <div>
            <h1 className="text-center text-6xl font-semibold my-28">All <span className="text-blue-500">Brands</span></h1>
            <div className="flex justify-center items-center my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">

                    {
                        brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                    }



                </div>
            </div>
        </div>
    );
};

export default Brands;