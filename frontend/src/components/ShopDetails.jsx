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
import storeLogo from "../assets/images/store.png";
import logoAlone from "../assets/images/logo_alone.png";

export default function ShopDetails() {
  const { id } = useParams();
  const [shop, setShop] = useState();

  const getShop = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/shops/${id}`
      )
      .then((response) => response.data)
      .then((data) =>
        axios
          .get(
            `${
              import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
            }/address/reverse/?lon=${data.x}&lat=${data.y}`
          )
          .then((response) => {
            setShop({
              ...data,
              address: response.data.features[0].properties.label,
            });
          })
      );
  };

  useEffect(() => {
    getShop();
  }, []);

  return (
    <main className="flex flex-col w-screen px-8 pt-8 pb-8 tracking-wide text-[#4F4E47]">
      <img src={logoAlone} alt="logo" className="max-w-[4rem] mr-2 mb-8" />
      {shop && (
        <>
          <p className=" text-2xl">{shop.name}</p>
          <p className=" text-m mb-2 leading-4">{shop.address}</p>
          <button
            type="button"
            className="text-m max-w-[33%] mb-4 py-1 border-solid border-2 rounded-full border-green-900 text-green-900 font-bold focus:outline-none focus:shadow-outline "
          >
            Y aller
          </button>
          <img
            src={shop.img_url ? shop.img_url : storeLogo}
            alt={`${shop.name} façade`}
            className={
              shop.img_url
                ? "my-5 border-2 border-[#4F4E47] rounded-lg"
                : "rounded-lg px-16 pt-4 pb-8"
            }
          />
          <section className="columns-2 text-center">
            <ul>
              Contact
              <li className="general-text">
                <FontAwesomeIcon icon={faEnvelope} /> :{" "}
                {shop.email ? shop.email : "à renseigner"}
              </li>
              <li className="general-text">
                <FontAwesomeIcon icon={faPhone} /> :{" "}
                {shop.phone ? shop.phone : "à renseigner"}
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
              {" "}
              Horaires
              <li className="general-text">
                Lundi :{" "}
                {shop.opening_hours ? shop.opening_hours.lundi : "à renseigner"}
              </li>
              <li className="general-text">
                Mardi :{" "}
                {shop.opening_hours ? shop.opening_hours.mardi : "à renseigner"}
              </li>
              <li className="general-text">
                Mercredi :{" "}
                {shop.opening_hours
                  ? shop.opening_hours.mercredi
                  : "à renseigner"}
              </li>
              <li className="general-text">
                Mercredi :{" "}
                {shop.opening_hours ? shop.opening_hours.jeudi : "à renseigner"}
              </li>
              <li className="general-text">
                Vendredi :{" "}
                {shop.opening_hours
                  ? shop.opening_hours.vendredi
                  : "à renseigner"}
              </li>
              <li className="general-text">
                Samedi :{" "}
                {shop.opening_hours
                  ? shop.opening_hours.samedi
                  : "à renseigner"}
              </li>
              <li className="general-text">
                Dimanche :{" "}
                {shop.opening_hours
                  ? shop.opening_hours.dimanche
                  : "à renseigner"}
              </li>
            </ul>
          </section>
        </>
      )}
    </main>
  );
}
