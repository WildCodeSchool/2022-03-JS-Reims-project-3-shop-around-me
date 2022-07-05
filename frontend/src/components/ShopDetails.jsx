import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import fossier from "../assets/images/fossier.png";
import logo from "../assets/images/logo_alone.png";

const shopExemple = {
  name: "Magasin Fossier",
  address: "25 Cr Jean-Baptiste Langlet, 51100 Reims",
  opening_hours: {
    lundi: "14:00-19:00",
    mardi: "10:00-19:00",
    mercredi: "10:00-19:00",
    jeudi: "10:00-19:00",
    vendredi: "10:00-19:00",
    samedi: "10:00-19:00",
    dimanche: "Fermé",
  },
  email: "fossier@fossier.fr",
  website: "http://www.fossier.fr/",
  fb_page: "https://www.facebook.com/biscuitsfossier",
  insta_page: "https://www.instagram.com/biscuitsfossier/",
  phone: "03.26.47.59.84",
};

export default function ShopDetails() {
  return (
    <main className="flex flex-col w-screen px-8 pt-8 pb-8 tracking-wide text-[#4F4E47]">
      <img src={logo} alt="logo" className="max-w-[4rem] mr-2 mb-8" />
      <p className=" text-2xl">{shopExemple.name}</p>
      <p className=" text-m mb-2 leading-4">{shopExemple.address}</p>
      <button
        type="button"
        className="text-m max-w-[33%] mb-4 py-1 border-solid border-2 rounded-full border-green-900 text-green-900 font-bold focus:outline-none focus:shadow-outline "
      >
        Y aller
      </button>
      <img
        src={fossier}
        alt={`${shopExemple.name} façade`}
        className="my-5 border-2 border-[#4F4E47] rounded-lg"
      />
      <section className="columns-2 text-center">
        <ul>
          Contact
          <li className="general-text">
            <FontAwesomeIcon icon={faPhone} /> {shopExemple.phone}
          </li>
          <li className="general-text">
            <FontAwesomeIcon icon={faEnvelope} /> {shopExemple.email}
          </li>
        </ul>
        <ul>
          <li>
            <a
              href={shopExemple.fb_page}
              target="blank"
              className="general-text"
            >
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a>
          </li>
          <li>
            <a
              href={shopExemple.insta_page}
              target="blank"
              className="general-text"
            >
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
          </li>
          <li>
            <a
              href={shopExemple.website}
              target="blank"
              className="general-text"
            >
              <FontAwesomeIcon icon={faGlobe} /> Website
            </a>
          </li>
        </ul>
        <br />
        <ul>
          Horaires
          <li className="general-text">
            Lundi: {shopExemple.opening_hours.lundi}
          </li>
          <li className="general-text">
            Mardi: {shopExemple.opening_hours.mardi}
          </li>
          <li className="general-text">
            Mercredi: {shopExemple.opening_hours.mercredi}
          </li>
          <li className="general-text">
            Jeudi: {shopExemple.opening_hours.jeudi}
          </li>
          <li className="general-text">
            Vendredi: {shopExemple.opening_hours.vendredi}
          </li>
          <li className="general-text">
            Samedi: {shopExemple.opening_hours.samedi}
          </li>
          <li className="general-text">
            Dimanche: {shopExemple.opening_hours.dimanche}
          </li>
        </ul>
      </section>
      <section className="mt-8 mb-16">
        <ul className="flex flex-wrap gap-y-4 justify-center">
          <li className="product-type">Biscuits Roses</li>
          <li className="product-type">Sablés</li>
          <li className="product-type">Épicerie Fine</li>
          <li className="product-type">Souvenirs</li>
          <li className="product-type">Cadeaux</li>
        </ul>
      </section>
    </main>
  );
}
