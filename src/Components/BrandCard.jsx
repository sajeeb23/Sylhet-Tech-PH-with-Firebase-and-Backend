import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1000, 
});

const BrandCard = ({ brand }) => {
    console.log(brand);
    return (
        <Link to={`/brandpage/${brand.brand_name}`}>
            <div className="card w-80 h-72 bg-base-100 cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-3 duration-200" data-aos="fade-up">
                <figure><img src={brand.image_url} alt="Shoes" /></figure>
                <div className="card-body text-center items-center" data-aos="fade-up">
                    <h2 className="card-title">
                        {brand.brand_name}
                    </h2>
                </div>
            </div>
        </Link>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object,
};

export default BrandCard;
