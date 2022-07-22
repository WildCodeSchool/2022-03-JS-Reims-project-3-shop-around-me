import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faUser,
  faUsers,
  faGears,
  faCircleInfo,
  faHouse,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../contexts/AuthContext";
import logo from "../assets/images/logo_alone.png";

const accountMenu = [
  {
    id: 1,
    categorie: "Mon Shop around me",
    titles: [
      {
        id: 1,
        title: "Historique cagnotte",
        url: "/account/",
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
        url: "/account/mydata",
        icon: faUser,
      },
      {
        id: 2,
        title: "Mes adresses",
        url: "/account/",
        icon: faHouse,
      },
      {
        id: 3,
        title: "Paramètres du compte",
        url: "/account/",
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
        url: "/account/",
        icon: faEnvelope,
      },
      {
        id: 2,
        title: "Préférence de gestion de données",
        url: "/account/",
        icon: faLock,
      },
    ],
  },
  {
    id: 4,
    categorie: "Information et assistance",
    titles: [
      {
        id: 1,
        title: "À propos de Shop around me",
        url: "/account/",
        icon: faUsers,
      },
      {
        id: 2,
        title: "Aide et contact",
        url: "/account/",
        icon: faCircleInfo,
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
        <p className=" text-lg mb-8">Voici votre compte.</p>
      </section>
      {accountMenu.map((menu) => (
        <ul key={menu.id}>
          <p className="py-4 px-8 text-xl font-bold bg-[hsl(30,7%,71%)] cursor-pointer">
            {menu.categorie}
          </p>
          {menu.titles.map((title) => (
            <li className="ml-12 my-4 text-lg" key={title.id}>
              <Link to={title.url}>
                <FontAwesomeIcon
                  icon={title.icon}
                  className="mr-4 w-[24px] h-[24px]"
                />
                {title.title}
              </Link>
            </li>
          ))}
        </ul>
      ))}
      <button
        type="button"
        className="text-m mt-4 mb-16 py-3 mx-8 border-solid border-2 border-[#5f2525] text-[#5f2525] font-bold rounded focus:outline-none focus:shadow-outline"
        onClick={handleLogout}
      >
        Se déconnecter
      </button>
    </main>
  );
}
