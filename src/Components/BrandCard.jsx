
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    console.log(brand);
    return (

        
        <Link to={`/brandpage/${brand.brand_name}`}>
            <div className="card w-80 h-72 bg-base-100 cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-3 duration-200">
                <figure><img src={brand.image_url} alt="Shoes" /></figure>
                <div className="card-body text-center items-center">
                    <h2 className="card-title">
                        {brand.brand_name}
                    </h2>

                </div>
            </div>
        </Link>

    );
};

BrandCard.propTypes = {

};

BrandCard.propTypes = {
    brand:PropTypes.object
}
export default BrandCard;