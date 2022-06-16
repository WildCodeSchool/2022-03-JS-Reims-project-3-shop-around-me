import { Link } from "react-router-dom";
import LoginIcon from "../assets/images/login_icon.png";

function Header() {
  return (
    <Link to="/connexion">
      <div className="relative h-32 w-100">
        <img
          src={LoginIcon}
          alt="login"
          className="absolute top-2 right-2 h-12 w-12"
        />
      </div>
    </Link>
  );
}
export default Header;
