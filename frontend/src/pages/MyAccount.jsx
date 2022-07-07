import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faUser,
  faGears,
  faCircleInfo,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../contexts/AuthContext";
import logo from "../assets/images/logo_alone.png";

const accountMenu = [
  {
    id: 1,
    icon: faPiggyBank,
    title: "Historique cagnotte",
    url: "/account/",
  },
  {
    id: 2,
    icon: faUser,
    title: "Mes données personnelles",
    url: "/account/mydata/",
  },
  {
    id: 3,
    icon: faGears,
    title: "Paramètres de l'application",
    url: "/account/",
  },
  {
    id: 4,
    icon: faCircleInfo,
    title: "Aide et contact",
    url: "/account/",
  },
  {
    id: 5,
    icon: faUserXmark,
    title: "Supprimer mes données",
    url: "/account/",
  },
];

export default function MyAccount() {
  const { loginData, setLoginData } = useAuthContext();
  const { firstname } = loginData.user;

  const handleLogout = () => {
    setLoginData({
      isLoggedIn: false,
      user: {},
    });
  };

  return (
    <main className="flex flex-col w-screen px-8 pt-8 pb-8 tracking-wide text-[#4F4E47]">
      <img src={logo} alt="logo" className="max-w-[4rem] mr-2 mb-8" />
      <p className=" text-2xl ">Bonjour {firstname} !</p>
      <p className=" text-m mb-8">Votre compte.</p>

      <ul>
        {accountMenu.map((menu) => (
          <li key={menu.id} className="mr-4 text-lg list-none mb-4">
            <Link to={menu.url} className="flex gap-8">
              <FontAwesomeIcon icon={menu.icon} className="w-[24px] h-[24px]" />

              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="text-m mt-8 py-3 border-solid border-2 border-red-600 text-red-600 font-bold rounded focus:outline-none focus:shadow-outline"
        onClick={handleLogout}
      >
        Se déconnecter
      </button>
    </main>
  );
}
