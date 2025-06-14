import Header from "./Header";

import { BG_LOGO_IMG } from "../utils/constants";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="backgroung logo image" src={BG_LOGO_IMG} />
      </div>
      <div>
        <form className="absolute w-3/12 p-12 bg-black/80 my-50 mx-auto right-0 left-0 text-white bg-">
          <h1 className="font-bold text-3xl py4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <button className="p-4 my-6 cursor-pointer bg-red-700 w-full rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign up now"
              : "Already registered? Sign In now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
