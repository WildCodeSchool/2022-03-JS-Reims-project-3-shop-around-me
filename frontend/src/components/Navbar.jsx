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
      // URL to be determined later
      url: "",
    },
    {
      id: 3,
      icon: faEuroSign,
      // URL to be determined later
      url: "",
    },
    {
      id: 4,
      icon: faHeart,
      // URL to be determined later
      url: "",
    },
    {
      id: 5,
      icon: faUser,
      // URL to be determined later
      url: "/myaccount",
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
