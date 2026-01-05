import React, { useContext, useState } from "react"; 
import { Link, NavLink } from "react-router";
import logoimg from "../assets/logo.png";
import { Authcontext } from "../ContextAuth/Authcontext";
import { toast } from "react-toastify";
import userlogo from "../assets/user.jpg";

const Navbar = () => {
  const [showInfo, setShowInfo] = useState(false);
  const { user, logout } = useContext(Authcontext);

  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/service">Services</NavLink>
      <NavLink to="/profile">My Profile</NavLink>
    </>
  );

  const logouthadnle = () => {
    logout()
      .then(() => toast.success("Logout successful!"))
      .catch(() => toast.error("Something went wrong!!"));
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-10/12 mx-auto mt-1">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link className="text-xl">
              <div className="flex justify-around items-center gap-2.5 font-bold">
                <img
                  className="hidden md:block w-10 h-6 md:w-12 md:h-12 overflow-hidden"
                  src={logoimg}
                  alt="logo"
                />
                <p>
                  Winter <span className="text-[#FFB347]">Woofs</span>
                </p>
              </div>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          <div className="navbar-end">
            {user ? (
              <div className="flex items-center gap-2">
               
                <div
                  className="relative group"
                  onClick={() => setShowInfo(!showInfo)} 
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FFB347] cursor-pointer">
                    <img
                      src={user?.photoURL || userlogo}
                      alt="user avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div
                    className={`absolute right-0 top-12 bg-white shadow-lg rounded-xl px-4 py-3 w-40 z-50 text-center transition-all duration-300
                    ${showInfo ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                    group-hover:opacity-100 group-hover:pointer-events-auto`} 
                  >
                    <p className="text-[#FFB347] font-semibold text-sm mb-2">
                      {user?.displayName || "Anonymous User"}
                    </p>
                  </div>
                </div>

                <div className="bg-blue-400 px-2 rounded-2xl">
                  <button
                    onClick={logouthadnle}
                    className="text-white text-sm"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <a className="btn bg-blue-400">
                  <Link to="/login" className="text-white">
                    Login
                  </Link>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
