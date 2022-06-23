import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.png";

export default function ShopDetails() {
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
    phone: "03 26 47 59 84",
  };

  return (
    <>
      <h1>{shopExemple.name}</h1>
      <img
        src={logo}
        alt="illu boutique"
        className="border-2 border-black my-5"
      />
      <ul>
        <li>Lundi : {shopExemple.opening_hours.lundi}</li>
        <li>Mardi : {shopExemple.opening_hours.mardi}</li>
        <li>Mercredi : {shopExemple.opening_hours.mercredi}</li>
        <li>Jeudi : {shopExemple.opening_hours.jeudi}</li>
        <li>Vendredi : {shopExemple.opening_hours.vendredi}</li>
        <li>Samedi : {shopExemple.opening_hours.samedi}</li>
        <li>Dimanche : {shopExemple.opening_hours.dimanche}</li>
      </ul>
      <ul>
        <li>
          <FontAwesomeIcon icon={faEnvelope} /> : {shopExemple.email}
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} /> : {shopExemple.phone}
        </li>
      </ul>
      <ul>
        <li>
          <a href={shopExemple.fb_page} target="blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href={shopExemple.insta_page} target="blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href={shopExemple.website} target="blank">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </li>
      </ul>
    </>
  );
}
