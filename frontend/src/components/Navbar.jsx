import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faStore,
  faHouse,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import { useAddress } from "../contexts/AddressContext";

const link = (icon, url, clickHandler = null, style = "") => (
  <li className={`text-white text-2xl ${style}`}>
    <Link to={url} onClick={clickHandler}>
      <FontAwesomeIcon icon={icon} />
    </Link>
  </li>
);

function Navbar() {
  const location = useLocation();
  const noNavbarPaths = ["/", "/inscription"];
  const { setResults } = useAddress();

  return noNavbarPaths.includes(location.pathname) ? null : (
    <nav className="fixed h-[3rem] w-screen bottom-0 bg-[#4F4E47] small-height:hidden">
      <ul className="flex items-center justify-evenly h-[3rem]">
        {link(faPiggyBank, "/funds")}
        {link(faStore, "/shopList")}
        {link(
          faHouse,
          "/home",
          () => setResults([]),
          "bg-white text-3xl p-8 rounded-full border-[3px] border-[#4F4E47] border-solid text-[#4F4E46]"
        )}
        {link(faHeart, "/fav")}
        {link(faUser, "/account")}
      </ul>
    </nav>
  );
}

export default Navbar;
