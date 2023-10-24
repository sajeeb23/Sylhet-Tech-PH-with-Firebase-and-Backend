import { useLoaderData } from "react-router-dom";
import Products from "./Products";

const BrandPage = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <div className="grid grid-cols-1 mx-4 lg:grid-cols-4 gap-6 my-16">
                {
                    products ?.map(product => <Products key={product._id} product ={product} ></Products>)
                }
            </div>
        </div>
    );
};

export default BrandPage;