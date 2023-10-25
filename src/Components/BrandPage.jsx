import { useLoaderData } from "react-router-dom";
import Products from "./Products";

const BrandPage = () => {
    const products = useLoaderData();
    console.log(products);

    return (
        <div>
            <div className="grid grid-cols-1 mx-4 lg:grid-cols-4 gap-6 my-16">
                {products.length > 0 ? (
                    products.map(product => (
                        <Products key={product._id} product={product} />
                    ))
                ) : (
                    <div className="flex h-full text-center justify-center items-center">
                        <p className="text-6xl font-bold">No products available.</p>
                    </div>

                )}
            </div>
        </div>
    );
};

export default BrandPage;
