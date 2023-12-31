/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Products = ({ product }) => {
    

    const { name, brandname, type, price, description, photo, _id } = product
    return (
        <div className="mt-14">
            <div className="card w-full h-3/4 bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-3 duration-200">
                <figure><img src={photo} className="h-4/5" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="font-bold">{brandname}</h2>
                    <div className="flex">
                        <p className="font-semibold">{type}</p>
                        <h3 className="font-semibold">{price}$</h3>
                    </div>
                    {
                        description.length > 70 ? 
                        <p>{description.slice(0,70)}<span className="font-semibold text-blue-500"> Click Details to read more...</span></p>
                        :
                        <p>{description}</p>
                    }
                    <div className="rating justify-center">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className="card-actions items-center justify-center">
                        <Link to={`/productDetails/${_id}`}><button className="btn bg-blue-500 text-white">Details</button></Link>
                        <Link to={`/updateProducts/${_id}`}><button className="btn bg-blue-500 text-white">Update</button></Link>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Products;