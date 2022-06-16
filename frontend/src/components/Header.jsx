import { Link } from "react-router-dom";
import { LoginIcon } from "../assets/images/login_icon.png";

export default function Header() {
  return (
    <Link to="/connexion">
      <img src={LoginIcon} alt="login" />
    </Link>
  );
}
