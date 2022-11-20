import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen min-h-screen flex flex-row items-center justify-center gap-20 bg-white">
      <img src="Login.gif" alt="Login" />
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl border border-black bg-yellow-900">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
          autoComplete="off"
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="block">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 focus:dark:border-violet-400 bg-slate-100"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 focus:dark:border-violet-400 bg-slate-100"
            />
            <div className="flex justify-end text-xs">
              <Link to={"/notfound"}>Forgot Password?</Link>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:bg-violet-400">
            LOGIN
          </button>
        </form>
        <p className="text-xs text-center sm:px-6">
          Don't have an account?
          <Link to={"/notfound"} className="underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
