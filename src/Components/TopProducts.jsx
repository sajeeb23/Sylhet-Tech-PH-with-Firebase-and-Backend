
const TopProducts = () => {
    return (
        <div className="my-24 mx-8 lg:mx-16">
            <h1 className="text-center text-3xl lg:text-6xl font-semibold my-4"><span className="text-blue-600">Top</span> Products</h1>
            <div className="text-blue-600 font-semibold flex justify-center items-center">
                <ul className="list-disc lg:text-xl">
                    <li>Apple MacBook Air 13.3-Inch Retina Display 8-core Apple M1 chip <button className="btn">100K views</button></li>
                    <li>Samsung Galaxy Note 9 <button className="btn">98K views</button></li>
                    <li>Apple iPhone XS <button className="btn mt-2">63K views</button></li>
                    <li>Google Pixel 7 Android Smartphone <button className="btn">58K views</button> (8/128GB)</li>
                    <li>Google Pixel 6a Android Smartphone (6/128GB) Sage <button className="btn">53K views</button></li>
                    <li>JBL Tune 510BT Wireless On-Ear <button className="btn">26K views</button></li>
                </ul>
            </div>
        </div>

    );
};

export default TopProducts;