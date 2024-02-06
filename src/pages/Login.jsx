import React, { useState } from "react";

import Header from "../components/Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="../assets/backgroundImage.jpg"
          alt="background"
          className="w-screen h-screen"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-opacity-85 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 bg-opacity-85"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-800 w-full bg-opacity-85"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-800 w-full bg-opacity-85"
        />
        <button className="p-4 my-6  bg-red-600 w-full rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="py-4 flex">
          <p className="text-gray-400">
            {isSignIn ? "New to Netstream GPT?" : "Already a User?"}
          </p>
          <Link
            className="pl-2 hover:underline"
            to={"/#"}
            onClick={toggleSignIn}
          >
            {isSignIn ? "Sign up now" : "Sign in"}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
