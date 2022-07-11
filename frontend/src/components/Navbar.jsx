import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faStore,
  faHouse,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const location = useLocation();
  const noNavbarPaths = ["/", "/inscription"];
  const createNavLink = ({ id, icon, url, style = "" }) => {
    return (
      <li key={id} className={`text-white text-2xl ${style}`}>
        <Link to={url}>
          <FontAwesomeIcon icon={icon} />
        </Link>
      </li>
    );
  };
  const navBarMenu = [
    {
      id: 1,
      icon: faHouse,
      url: "/home",
    },
    {
      id: 2,
      icon: faStore,
      url: "/shopList",
    },
    {
      id: 3,
      icon: faPiggyBank,
      url: "/funds",
      style: "text-5xl",
    },
    {
      id: 4,
      icon: faHeart,
      url: "/fav",
    },
    {
      id: 5,
      icon: faUser,
      url: "/account",
    },
  ];
  return noNavbarPaths.includes(location.pathname) ? null : (
    <nav className="fixed h-[8vh] w-screen bottom-0 bg-[#4F4E47]">
      <ul className="flex items-center justify-evenly h-[8vh]">
        {navBarMenu.map((menu) => createNavLink(menu))}
      </ul>
    </nav>
  );
}

export default Navbar;
