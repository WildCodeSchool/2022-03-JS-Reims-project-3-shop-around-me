import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faUser,
  faGears,
  faCircleInfo,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function MyAccount() {
  const accountMenu = [
    {
      id: 1,
      icon: faPiggyBank,
      title: "Historique cagnotte",
      url: "/myaccount/",
    },
    {
      id: 2,
      icon: faUser,
      title: "Mes données personnelles",
      url: "/myaccount/",
    },
    {
      id: 3,
      icon: faGears,
      title: "Paramètres de l'application",
      url: "/myaccount/",
    },
    {
      id: 4,
      icon: faCircleInfo,
      title: "Aide et contact",
      url: "/myaccount/",
    },
    {
      id: 5,
      icon: faUserXmark,
      title: "Supprimer mes données",
      url: "/myaccount/",
    },
  ];
  return (
    <section className="flex flex-col gap-y-8 w-screen px-8 pt-8 pb-8">
      <h2 className=" text-4xl text-center">Mon compte</h2>
      <ul>
        {accountMenu.map((menu) => (
          <li
            key={menu.id}
            className="mr-4 text-gray-900 text-xl list-none mb-4"
          >
            <Link to={menu.url} className="flex gap-8">
              <div className="w-[24px] h-[24px]">
                <FontAwesomeIcon icon={menu.icon} />
              </div>
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="text-m py-3 border-solid border-2 border-red-600 text-red-600 font-bold rounded focus:outline-none focus:shadow-outline"
      >
        Se déconnecter
      </button>
    </section>
  );
}
