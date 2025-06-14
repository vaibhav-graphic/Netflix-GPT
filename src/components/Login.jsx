import Header from "./Header";

import { BG_LOGO_IMG } from "../utils/constants";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="backgroung logo image" src={BG_LOGO_IMG} />
      </div>
      <div>
        <form className="absolute w-3/12 p-12 bg-black/80 my-75 mx-auto right-0 left-0 text-white bg-">
          <h1 className="font-bold text-3xl py4">Sign In</h1>
          <input
            type="text"
            placeholder="Email or mobile number"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full"
          />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
