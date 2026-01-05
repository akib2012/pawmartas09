import React, { useContext } from "react";
import { Authcontext } from "../ContextAuth/Authcontext";
import { toast } from "react-toastify";
import { useLocation, Link } from "react-router";

const Forgetpass = () => {
  const { reaserpassword } = useContext(Authcontext);
  const location = useLocation();
  const emailFromLogin = location.state?.email || "";

  const haddlereset = (e) => {
    e.preventDefault();
    const email = e.target.mail.value;
    reaserpassword(email)
      .then(() => toast.success("Check your mail to reset the password!"))
      .catch(() => toast.error("Something went wrong!"));
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 flex items-center justify-center p-4 mt-16">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Reset Your Password
          </h2>

          <form onSubmit={haddlereset} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="mail"
                defaultValue={emailFromLogin}
                placeholder="Enter your registered email"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              Reset Password
            </button>
          </form>

          {/* Back to Login */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Remembered your password?{" "}
            <Link
              to="/login"
              className="text-indigo-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forgetpass;
