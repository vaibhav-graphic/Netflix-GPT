import { LOGO_IMG } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black">
      <img
        className="w-44"
        src={LOGO_IMG}
        alt="logo"
      />
    </div>
  );
};

export default Header;
