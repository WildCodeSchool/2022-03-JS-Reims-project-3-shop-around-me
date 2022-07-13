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
    categorie: "Mon Shop Around",
    titles: [
      {
        id: 1,
        title: "Historique cagnotte",
        url: "/account/info",
        icon: faPiggyBank,
      },
    ],
  },
  {
    id: 2,
    categorie: "Gérer mon profil",
    titles: [
      {
        id: 1,
        title: "Mes données personnelles",
        url: "/account/info",
        icon: faUser,
      },
      {
        id: 2,
        title: "Mes adresses",
        url: "/account/address",
        icon: faUser,
      },
      {
        id: 3,
        title: "Paramètres du compte",
        url: "/account/orders",
        icon: faGears,
      },
    ],
  },
  {
    id: 3,
    categorie: "Paramètre de l'application",
    titles: [
      {
        id: 1,
        title: "Préférence de communication",
        url: "/account/info",
        icon: faCircleInfo,
      },
      {
        id: 2,
        title: "Préférence de gestion de données",
        url: "/account/info",
        icon: faCircleInfo,
      },
    ],
  },
  {
    id: 4,
    categorie: "Information et assistance",
    titles: [
      {
        id: 1,
        title: "À propod de l'application",
        url: "/account/info",
        icon: faUserXmark,
      },
      {
        id: 2,
        title: "Aide et contact",
        url: "/account/info",
        icon: faUserXmark,
      },
    ],
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
    <main className="flex flex-col w-screen pb-8 tracking-wide text-[#4F4E47]">
      <section className="px-8 pt-8">
        <img src={logo} alt="logo" className="max-w-[4rem] mr-2 mb-8" />
        <p className=" text-2xl">Bonjour {firstname} !</p>
        <p className=" text-m mb-8">Votre compte.</p>
      </section>
      {accountMenu.map((menu) => (
        <ul>
          <p className="py-4 px-8 text-xl font-bold bg-[hsl(30,7%,71%)] cursor-pointer">
            {menu.categorie}
          </p>
          {menu.titles.map((title) => (
            <li className="ml-12 my-4 text-lg" key={title.id}>
              <Link to={title.url}>
                <FontAwesomeIcon icon={title.icon} className="mr-4 text-xl" />
                {title.title}
              </Link>
            </li>
          ))}
        </ul>
      ))}

      <button
        type="button"
        className="text-m mb-16 mt-4 py-3 border-solid border-2 border-red-600 text-red-600 font-bold rounded focus:outline-none focus:shadow-outline"
        onClick={handleLogout}
      >
        Se déconnecter
      </button>
    </main>
  );
}
