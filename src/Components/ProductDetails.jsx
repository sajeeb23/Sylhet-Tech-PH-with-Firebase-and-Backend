import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {

    const products = useLoaderData() || [];
    const { name, brandname, type, price, description, photo } = products;

    return (
        <div className="container mx-2 md:mx-auto lg:mx-auto my-14">
            <h2 className="text-4xl font-bold">{name}</h2>
            <div className="my-8 flex items-center justify-center">
                <img src={photo} className="w-3/5" alt={name} />
            </div>
            <h3 className="my-4 font-semibold text-2xl underline">{brandname}</h3>
            <p className="my-2 text-xl font-semibold">Type: {type}</p>
            <p className="my-2 text-xl font-semibold">Price: {price}$</p>
            <p className="my-2 text-lg text">{description}</p>
            <button>Add to Carts</button>

        </div>
    );
};

export default ProductDetails;
