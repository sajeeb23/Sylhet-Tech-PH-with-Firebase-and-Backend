const Banner = () => {
    return (
        <div className="relative text-center my-7">
            <img src="https://i.ibb.co/XJSzKcV/wallpaperflare-com-wallpaper-17.jpg" className="w-11/12 mx-auto" alt="" />
            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white">
                <p className="text-8xl font-bold">Sylhet<span className="text-blue-500">Tech</span></p>
                <p className="text-3xl mt-10">SylhetTech 4th floor, Zindabazar, Sylhet</p>
                <p className="text-2xl mt-3">sylhetech2023@gmail.com</p>
            </div>
        </div>
    );
};

export default Banner;
