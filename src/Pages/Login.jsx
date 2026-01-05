import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Authcontext } from "../ContextAuth/Authcontext";
import { toast } from "react-toastify";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login, usersinupwhithgoogle } = useContext(Authcontext);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState(""); // track email input

  const handlelogin = (e) => {
    e.preventDefault();
    const mail = e.target.mail.value;
    const password = e.target.password.value;

    login(mail, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
        toast.success("Successfully login!");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something went wrong");
      });
  };

  const hadnlegoogleauth = () => {
    usersinupwhithgoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 flex items-center justify-center p-4 mt-16">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome Back
          </h2>

          {/* Form */}
          <form onSubmit={handlelogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
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

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                to="/resetpassword"
                state={{ email }}
                className="text-sm text-indigo-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              Login
            </button>
          </form>

          
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

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/regester"
              className="text-indigo-600 font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
