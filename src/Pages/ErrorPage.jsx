import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <img src="https://i.ibb.co/ynL411p/3828539.png" className="w-4/5 md:w-3/12 lg:w-3/12" alt="" />
            <p className="text-xl md:text-3xl lg:text-3xl mt-4 font-semibold">Page does not exist! Back to <Link to={'/'} className="btn">Home!</Link></p>
        </div>
    );
};

export default ErrorPage;