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

const link = (icon, url, clickHandler) => (
  <li className="mr-4 text-white text-2xl">
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
    <nav className="fixed h-[8vh] w-screen bottom-0 bg-[#4F4E47]">
      <ul className="flex items-center justify-evenly h-[8vh]">
        {link(faHouse, "/home", () => setResults([]))}
        {link(faStore, "/shopList")}
        {link(faPiggyBank, "/funds")}
        {link(faHeart, "/fav")}
        {link(faUser, "/account")}
      </ul>
    </nav>
  );
}

export default Navbar;
