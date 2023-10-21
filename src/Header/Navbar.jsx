import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch();
  };
  console.log(user);
  return (
    <div>
      <div className="navbar bg-base-100 justify-between">
        <div className="flex items-center">
          <Link className="flex items-center">
            <img src="/logo1.png" alt="" />
            <p className="font-semibold text-xl">
              Sylhet<span className="text-blue-600">Tech</span>
            </p>
          </Link>
        </div>
        <div className="flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-blue-700 text-white py-2 px-3 rounded-l-xl"
                  : "bg-blue-500 text-white py-2 px-3 rounded-l-xl"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/addproduct"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-blue-700 text-white py-2 px-3"
                  : "bg-blue-500 text-white py-2 px-3"
              }
            >
              Add Product
            </NavLink>

            <NavLink
              to="/mycart"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-blue-700 text-white py-2 px-3"
                  : "bg-blue-500 text-white py-2 px-3"
              }
            >
              My Cart
            </NavLink>

            {user ? (
              <NavLink className="bg-blue-500 text-white py-2 px-3 rounded-r-xl">
                <button onClick={handleSignOut}>Sign Out</button>
              </NavLink>
            ) : (
              <NavLink
                to="/signup"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-blue-700 text-white py-2 px-3 rounded-r-xl"
                    : "bg-blue-500 text-white py-2 px-3 rounded-r-xl"
                }
              >
                Sign Up
              </NavLink>
            )}
          </ul>
          <div className="avatar">
            <div className="w-12 rounded-full">
              {user ? (
                <img src={user.photo} alt="User" />
              ) : (
                <img src="user.png" alt="" />
              )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
