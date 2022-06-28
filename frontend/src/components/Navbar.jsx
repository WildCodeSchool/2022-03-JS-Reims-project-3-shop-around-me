import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faStore,
  faHouse,
  faEuroSign,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const navBarMenu = [
    {
      id: 1,
      icon: faHouse,
      url: "/",
    },
    {
      id: 2,
      icon: faStore,
      url: "/account",
    },
    {
      id: 3,
      icon: faEuroSign,
      url: "/funds",
    },
    {
      id: 4,
      icon: faHeart,
      url: "/fav",
    },
    {
      id: 5,
      icon: faUser,
      url: "/inscription",
    },
  ];
  return (
    <nav className="fixed h-[8vh] w-screen bottom-0 bg-[#4F4E47]">
      <ul className="flex items-center justify-evenly h-[8vh]">
        {navBarMenu.map((menu) => (
          <li key={menu.id} className="mr-4 text-white text-2xl">
            <Link to={menu.url}>
              <FontAwesomeIcon icon={menu.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
