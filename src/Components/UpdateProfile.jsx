import React, { useContext } from "react";
import { Authcontext } from "../ContextAuth/Authcontext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";

const UpdateProfile = () => {
  const { updateprofile, user, setUser } = useContext(Authcontext);
  const naviagte = useNavigate();

  const hadnleupdateprofile = (e) => {
    e.preventDefault();

    // console.log("clicked here now!!");

    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateprofile({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("your profile updated sucessfull !!");
        naviagte("/profile");
      })
      .cathc(() => {
        toast.error("somthing went wrong !!!");
      });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-indigo-100 via-white to-pink-100">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Update Your Profile
          </h2>

          <form onSubmit={hadnleupdateprofile} className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Photo URL Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter image URL"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2.5 rounded-lg transition duration-300"
            >
              Save Changes
            </button>
            <div className="flex justify-center items-center">
              <Link to="/profile">
                <button className=" px-4 py-1.5 w-fit bg-[#FFB347] hover:bg-indigo-600 text-white font-semibold  rounded-lg ">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
