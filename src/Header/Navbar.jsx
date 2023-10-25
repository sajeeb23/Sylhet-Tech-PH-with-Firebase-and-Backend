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

  return (
    <div>
      <div className="navbar bg-base-100 justify-between text-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo1.png" alt="" />
            <p className="font-semibold text-xl">
              Sylhet<span className="text-blue-600">Tech</span>
            </p>
          </Link>
        </div>
        <div className="flex items-center">
          {user ? (
            <div className="hidden md:flex lg:flex gap-3 items-center">
              <div className="w-1/12 text-center mr-4 rounded-full">
                <div className="flex justify-center items-center font-semibold text-center">
                  {user?.displayName || "Guest"}
                </div>
              </div>
              <div className="avatar">
                <div className="left-6 w-12 rounded-full">
                  <img src={user?.photoURL || "/user.png"} alt="User" />
                </div>
              </div>
            </div>
          ) : null}
          <div className="hidden md:block lg:block">
            <ul className="menu menu-horizontal px-1 flex">
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
          </div>
        </div>

        {/* for mobile view */}
        <div className="dropdown dropdown-bottom dropdown-end md:hidden lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {user ? (
              <div className="p-6 justify-center flex gap-3 items-center">
                <div className="w-1/12 text-center mr-4 rounded-full">
                  <div className="flex justify-center items-center font-semibold text-center">
                    {user?.displayName || "Guest"}
                  </div>
                </div>
                <div className="avatar">
                  <div className="left-6 w-12 rounded-full">
                    <img src={user?.photoURL || "/user.png"} alt="User" />
                  </div>
                </div>
              </div>
            ) : null}
            <li>
              <a>
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
              </a>
            </li>
            <li>
              <a>
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
              </a>
            </li>
            <li>
              <a>
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
              </a>
            </li>
            {user ? (
              <li>
                <a>
                  <NavLink className="bg-blue-500 text-white py-2 px-3 rounded-r-xl">
                    <button onClick={handleSignOut}>Sign Out</button>
                  </NavLink>
                </a>
              </li>
            ) : (
              <li>
                <a>
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
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
