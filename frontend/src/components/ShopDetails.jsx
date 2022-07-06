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
    <section className="mb-[4.5rem]">
      <h1 className="text-center my-6 text-3xl">{shop.name}</h1>
      <img
        src={fossier}
        alt={`${shop.name} façade`}
        className="my-5 border-2 border-black max-w-[85%] mx-auto rounded-lg"
      />
      <ul>
        <li className="shedules">{shop.opening_hours}</li>
      </ul>
      <ul className="flex justify-between mx-4 my-6">
        <li>
          <FontAwesomeIcon icon={faEnvelope} className="contact-icons" /> :{" "}
          {shop.email}
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} className="contact-icons" /> :{" "}
          {shop.phone}
        </li>
      </ul>
      <ul className="flex justify-evenly my-4">
        <li className="link-icons">
          <a href={shop.fb_page} target="blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="link-icons">
          <a href={shop.insta_page} target="blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="link-icons">
          <a href={shop.website} target="blank">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </li>
      </ul>
    </section>
  );
}
