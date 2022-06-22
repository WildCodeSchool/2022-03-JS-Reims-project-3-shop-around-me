import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faStore,
  faHouse,
  faEuroSign,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const navBarMenu = [faHouse, faStore, faEuroSign, faHeart, faUser];
  return (
    <div className="fixed h-[8vh] w-screen bottom-0 bg-[#4F4E47]">
      <ul className="flex items-center justify-evenly h-[8vh]">
        {navBarMenu.map((menu) => (
          <li key={menu} className="mr-4 text-white text-2xl">
            <FontAwesomeIcon icon={menu} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
