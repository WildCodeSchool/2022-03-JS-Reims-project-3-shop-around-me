import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import fossier from "../assets/images/fossier.png";
import logo from "../assets/images/logo_alone.png";

export default function ShopDetails() {
  const { id } = useParams();
  const [shop, setShop] = useState([]);

  const getShop = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/shops/${id}`
      )
      .then((response) => setShop(response.data));
  };

  useEffect(() => getShop, []);

  return (
    <main className="flex flex-col w-screen px-8 pt-8 pb-8 tracking-wide text-[#4F4E47]">
      <img src={logo} alt="logo" className="max-w-[4rem] mr-2 mb-8" />
      <p className=" text-2xl">{shop.name}</p>
      <p className=" text-m mb-2 leading-4">{shop.address}</p>
      <button
        type="button"
        className="text-m max-w-[33%] mb-4 py-1 border-solid border-2 rounded-full border-green-900 text-green-900 font-bold focus:outline-none focus:shadow-outline "
      >
        Y aller
      </button>
      <img
        src={fossier}
        alt={`${shop.name} façade`}
        className="my-5 border-2 border-[#4F4E47] rounded-lg"
      />
      <section className="columns-2 text-center">
        <ul>
          Contact
          <li className="general-text">
            <FontAwesomeIcon icon={faEnvelope} /> : {shop.email}
          </li>
          <li className="general-text">
            <FontAwesomeIcon icon={faPhone} /> : {shop.phone}
          </li>
          <li className="general-text">
            <a href={shop.fb_page} target="blank">
              <FontAwesomeIcon icon={faFacebook} /> : Facebook
            </a>
          </li>
          <li className="general-text">
            <a href={shop.insta_page} target="blank">
              <FontAwesomeIcon icon={faInstagram} /> : Instagram
            </a>
          </li>
          <li className="general-text">
            <a href={shop.website} target="blank">
              <FontAwesomeIcon icon={faGlobe} /> : Website
            </a>
          </li>
        </ul>
        <br />
        <ul>
          Horaires
          <li className="general-text">{shop.opening_hours}</li>
        </ul>
      </section>
    </main>
  );
}
