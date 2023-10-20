import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner";
import Products from "../Components/Products";


const Home = () => {
    const products = useLoaderData() || [];
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-3 my-14 mx-12">
                {
                    products.map(product => <Products key={product._id} product={product}></Products>)
                }
            </div>

        </div>
    );
};

export default Home;