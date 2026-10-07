
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setform] = useState({});
  const [formerr, setErr] = useState({});

  function changeHandler(e) {
    const { name, value } = e.target;

    setform({
      ...form,
      [name]: value,
    });
  }

  function errorcheck() {
    const err = {};

    if (!form.email) {
      err.email = "Enter your email";
    }

    if (!form.password) {
      err.password = "Enter your password";
    }

    return err;
  }

  function submitHandle(e) {
    e.preventDefault();

    const error = errorcheck();
    setErr(error);

    if (Object.keys(error).length === 0) {
      localStorage.setItem("isLogIn", "true");
      navigate("/dashboard");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 from-slate-100 via-gray-100 to-slate-200 px-4">

      <div className="w-full max-w-md">

        {/* Login Card */}
        <form
          onSubmit={submitHandle}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome Back
            </h1>

            <p className="text-gray-500 mt-2 text-sm">
              Login to continue to your dashboard
            </p>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>

            <input
              type="email"
              name="email"
              id="email"
              value={form.email || ""}
              onChange={changeHandler}
              placeholder="Enter your email"
              className={`w-full px-4 py-3 rounded-lg border outline-none transition
                ${
                  formerr.email
                    ? "border-red-400 focus:ring-2 focus:ring-red-100"
                    : "border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                }`}
            />

            {formerr.email && (
              <p className="text-red-500 text-sm mt-1">
                {formerr.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-7">
            <label
              htmlFor="passw"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              id="passw"
              value={form.password || ""}
              onChange={changeHandler}
              placeholder="Enter your password"
              className={`w-full px-4 py-3 rounded-lg border outline-none transition
                ${
                  formerr.password
                    ? "border-red-400 focus:ring-2 focus:ring-red-100"
                    : "border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                }`}
            />

            {formerr.password && (
              <p className="text-red-500 text-sm mt-1">
                {formerr.password}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Login
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <span className="text-indigo-600 font-medium cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;
