import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProducts = () => {

    const products = useLoaderData() || [];
    const { name, brandname, type, price, description, photo, _id } = products;

        const handleUpdateProduct = event => {
            event.preventDefault();
            const form = event.target;
    
            const name = form.name.value;
            const brandname = form.brandname.value;
            const type = form.type.value;
            const price = form.price.value;
            const description = form.description.value;
            const photo = form.photo.value;
            const rating = document.querySelector('input[name="rating-2"]:checked');
    
            const updateProduct = {
                name,
                brandname,
                type,
                price,
                description,
                photo,
                rating: rating ? rating.value : 'No Rating'
            };
            console.log(updateProduct);
    
            fetch(`https://assignment-10-server-qo1epb8yq-sjb.vercel.app/products/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateProduct)
            })
            
            .then(res => res.json())
            .then (data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Next'
                      })
                }
            })
    
        }

    return (
        <div className="my-6">
            <p className="font-bold text-4xl text-center my-3">Update product!</p>

            <form onSubmit={handleUpdateProduct}>
                <div className="mx-14 px-8 md:px-96 lg:px-0 md:flex lg:flex gap-12 items-center justify-center bg-white shadow-2xl py-20">

                    <div>
                        <div className="form-control">
                            <label className="input-group input-group-vertical">
                                <span className="bg-blue-500 text-white">Name:</span>
                                <input type="text" name="name" defaultValue={name} placeholder="Products name" className="input input-bordered" />
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <label className="input-group input-group-vertical">
                                <span className="bg-blue-500 text-white">Brand name:</span>
                                <input type="text" name="brandname" defaultValue={brandname} placeholder="Brand name" className="input input-bordered" />
                            </label>
                        </div>

                        <select name="type" defaultValue={type} className="my-4 lg:mt-7 md:mt-7 select-bordered max-w-xs">
                            <option disabled defaultValue={''}>Type</option>
                            <option>Phones</option>
                            <option>Computer</option>
                            <option>Headphone and Speakers</option>
                        </select>
                    </div>
                    <div>
                        <div className="form-control ">
                            <label className="input-group input-group-vertical">
                                <span className="bg-blue-500 text-white">Price:</span>
                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <label className="input-group input-group-vertical">
                                <span className="bg-blue-500 text-white">Short description:</span>
                                <input type="text" placeholder="Short description" defaultValue={description} name="description" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <label className="input-group input-group-vertical">
                                <span className="bg-blue-500 text-white">Photo URL:</span>
                                <input type="text" placeholder="Photo URL" name="photo" defaultValue={photo} className="input input-bordered" />
                            </label>
                        </div>

                    </div>
                    <div className="flex-col">
                        <div className="rating mt-6">
                            <p className="font-semibold">Rate:</p>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <button className="btn ml-4 hover-bg-blue-500 hover-text-white">Update Product</button>
                    </div>

                </div>
            </form>

        </div>
    );
};

export default UpdateProducts;