import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 justify-between">
                <div className="flex items-center">
                    <Link className="flex items-center"><img src="/logo1.png" alt="" />
                        <p className="font-semibold text-xl">Sylhet<span className="text-blue-600">Tech</span></p></Link>
                </div>
                <div className="flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-blue-700 text-white py-2 px-3 rounded-l-xl" : "bg-blue-500 text-white py-2 px-3 rounded-l-xl"
                            }>
                            Home
                        </NavLink>

                        <NavLink to="/addproduct"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-blue-700 text-white py-2 px-3" : "bg-blue-500 text-white py-2 px-3"
                            }>
                            Add Product
                        </NavLink>

                        <NavLink to="/mycart"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-blue-700 text-white py-2 px-3" : "bg-blue-500 text-white py-2 px-3"
                            }>
                            My Cart
                        </NavLink>

                        <NavLink to="/signup"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-blue-700 text-white py-2 px-3 rounded-r-xl" : "bg-blue-500 text-white py-2 px-3 rounded-r-xl"
                            }>
                            SignUp
                        </NavLink>

                    </ul>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="user.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;