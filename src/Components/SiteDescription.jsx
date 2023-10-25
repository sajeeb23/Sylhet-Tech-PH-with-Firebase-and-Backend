import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SiteDescription = () => {
    useEffect(() => {
        // Initialize AOS after the component mounts
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
        });
    }, []);

    return (
        <div className="my-24 mx-8 lg:mx-16">
            <h1 className="text-3xl lg:text-6xl text-center font-semibold my-8" data-aos="fade">
                Buy Latest products at the best price in Sylhet
            </h1>
            <p data-aos="fade">
                Welcome to Sylhet<span className="text-blue-500">Tech</span>, your ultimate destination for top-tier technology products. We are your trusted source for an exceptional selection of laptops, mobile devices, headphones, speakers, and accessories from the most renowned brands in the industry, including Samsung, Apple, Google, HP, OnePlus, and JBL.
            </p>
            <h2 className="text-3xl font-semibold mt-4 " data-aos="fade">Our Products:</h2>
            <p data-aos="fade">
               <h2 className="text-2xl font-semibold mt-2" data-aos="fade"> Laptops:</h2> Explore our extensive range of laptops, meticulously chosen to cater to both personal and professional needs. Whether you are a student, a creative professional, or a business executive, we have the perfect laptop for you. Experience the latest in computing technology with brands like HP and Apple.

                <h2 className="text-2xl font-semibold mt-2" data-aos="fade">Mobile Devices:</h2> Stay connected and productive with our collection of mobile devices, featuring the latest smartphones and tablets from Samsung, Apple, and OnePlus. Discover cutting-edge features, stunning displays, and powerful performance in the palm of your hand.

                <h2 className="text-2xl font-semibold mt-2" data-aos="fade">Audio Delights:</h2> Elevate your audio experience with our selection of headphones and speakers from JBL. Immerse yourself in high-quality sound for music, movies, and gaming. Our audio products are designed to take your entertainment to the next level.
            </p>
            <p className="mt-8">
                <h2 className="text-3xl font-semibold" data-aos="fade">Why Choose Us:</h2>

                <p className="mt-4" data-aos="fade">At Sylhet Tech, we are committed to providing you with the finest technology solutions that seamlessly integrate into your lifestyle. Here is why you should choose us.</p>
                <h2 className="text-2xl font-semibold mt-2" data-aos="fade">Quality and Reliability:</h2> We offer only top-tier products from reputable brands, ensuring that you receive quality and reliability with every purchase.

                <h2 className="text-2xl font-semibold mt-2" data-aos="fade">Expert Curation:</h2> Our team of experts meticulously curates our product offerings, so you can trust that you are getting the best of the best.

                <h2 className="text-2xl font-semibold mt-2" data-aos="fade">Diverse Selection:</h2> Whether you are a tech enthusiast or a casual user, our wide range of products caters to various preferences and needs.

                <h2 className="text-2xl font-semibold mt-2" data-aos="fade">Customer Satisfaction:</h2> Your satisfaction is our priority. We provide excellent customer service, including expert guidance, timely shipping, and responsive support.

                <h2 className="text-2xl font-semibold mt-2" data-aos="fade">Stay Informed:</h2> Our Product Details section provides insightful content to help you make informed decisions and stay updated on the latest tech trends.

                <p className="mt-6" data-aos="fade">Explore our website and discover the perfect tech solutions that match your needs, all backed by our commitment to quality, excellence, and customer satisfaction. We are here to make your tech shopping experience effortless and enjoyable.</p>
            </p>
        </div>
    );
};

export default SiteDescription;
