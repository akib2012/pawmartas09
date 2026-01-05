import React, { useContext } from "react";
import { Authcontext } from "../ContextAuth/Authcontext";
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = useContext(Authcontext);

  return (
    <div>
      <div data-aos="fade-up" className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-indigo-100 via-white to-pink-100">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="User Avatar"
              className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-indigo-400 shadow-md object-cover"
            />
          </div>

          {/* User Info */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
            {user?.displayName || "Anonymous User"}
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            {user?.email || "No email available"}
          </p>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Update Profile Button */}

          <Link to='/updateprofile'>
            <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-xl transition duration-300">
              Update Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
