import React, { useContext, useState } from "react";
import { Authcontext } from "../ContextAuth/Authcontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

const Regester = () => {
  const { userregester, usersinupwhithgoogle, updateprofile, setUser } =
    useContext(Authcontext);

  const [show, setShow] = useState(false);

  const naviate = useNavigate();

  /* password validarions */

  // console.log(userregester);


  /* here added the validation process  */

  const hadnleregester = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const mail = e.target.mail.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters, include upper, lower, number & special character!"
      );
      return;
    }

    userregester(mail, password)
      .then((result) => {
        const user = result.user;
        naviate("/");
        toast.success("Registration Successful! ");

        updateprofile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((err) => {
            console.log(err.message);
            setUser(user);
            toast.success("Registration Successful! ");
          });
      })

      .catch((eror) => {
        console.log(eror.message);
        toast.error("Something went wrong! ⚠️");
      });
  };

  const hadnlegoogleauth = () => {
    usersinupwhithgoogle()
      .then(() => {
        naviate('/')
        toast.success("Registration Successful! ")
      })
      .catch(() => toast.error("Something went wrong! ⚠️"));
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 flex items-center justify-center p-4 mt-20">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Create an Account
          </h2>

          {/* Form */}
          <form onSubmit={hadnleregester} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="mail"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photo URL
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Enter your photo URL"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
              
              <div className="absolute right-3 top-9 md:top-8">
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  {show ? <FaRegEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              Register
            </button>
          </form>

          {/* Divider */}
          <div className="my-5 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3 text-sm text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Google Login */}
          <button
            onClick={hadnlegoogleauth}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-xl hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="font-medium text-gray-700">
              Continue with Google
            </span>
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-indigo-600 font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regester;
