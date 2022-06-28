import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import fossier from "../assets/images/fossier.png";

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

export default function ShopDetails() {
  return (
    <section className="mb-[4.5rem]">
      <h1 className="text-center my-6 text-3xl">{shopExemple.name}</h1>
      <img
        src={fossier}
        alt={`${shopExemple.name} façade`}
        className="my-5 border-2 border-black max-w-[85%] mx-auto rounded-lg"
      />
      <ul>
        <li className="shedules">Lundi : {shopExemple.opening_hours.lundi}</li>
        <li className="shedules">Mardi : {shopExemple.opening_hours.mardi}</li>
        <li className="shedules">
          Mercredi : {shopExemple.opening_hours.mercredi}
        </li>
        <li className="shedules">Jeudi : {shopExemple.opening_hours.jeudi}</li>
        <li className="shedules">
          Vendredi : {shopExemple.opening_hours.vendredi}
        </li>
        <li className="shedules">
          Samedi : {shopExemple.opening_hours.samedi}
        </li>
        <li className="shedules">
          Dimanche : {shopExemple.opening_hours.dimanche}
        </li>
      </ul>
      <ul className="flex justify-between mx-4 my-6">
        <li>
          <FontAwesomeIcon icon={faEnvelope} className="contact-icons" /> :{" "}
          {shopExemple.email}
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} className="contact-icons" /> :{" "}
          {shopExemple.phone}
        </li>
      </ul>
      <ul className="flex justify-evenly my-4">
        <li className="link-icons">
          <a href={shopExemple.fb_page} target="blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="link-icons">
          <a href={shopExemple.insta_page} target="blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="link-icons">
          <a href={shopExemple.website} target="blank">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </li>
      </ul>
    </section>
  );
}
