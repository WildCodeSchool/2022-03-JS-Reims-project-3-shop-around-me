import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../contexts/AuthContext";
import logo from "../assets/images/logo_alone.png";

export default function Fav() {
  const [fav, setFav] = useState([]);
  const {
    loginData: {
      user: { id },
    },
  } = useAuthContext();

  const getFavorite = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/shop_user/${id}`
      )
      .then((response) => setFav(response.data));
  };

  const removeFavorite = (shopId) => {
    axios
      .delete(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/shop_user/shops/${shopId}/user/${id}`
      )
      .then(() => getFavorite());
  };

  useEffect(() => {
    getFavorite();
  }, []);

  const handleRemove = (shopId) => {
    removeFavorite(shopId);
  };

  return (
    <section className="flex flex-col w-screen px-8 pt-8 pb-8 tracking-wide">
      <img src={logo} alt="logo" className="max-w-[4rem] mr-2 mb-8" />
      <p className=" text-2xl text-[#4F4E47]">Vos favoris</p>
      <p className=" text-m text-[#4F4E47] mb-8 leading-4">
        Enregistrez vos boutiques favorites et retrouvez-les rapidement.
      </p>
      <ul className="flex flex-col gap-x-4 gap-y-4 mb-16 text-[#4F4E47]">
        {fav.map((favorite) => (
          <li key={favorite.shop_id}>
            <figure className="flex w-[100%] mt-1 mb-1 justify-between items-center bg-white rounded-lg">
              <Link to={`/shops/${favorite.shop_id}`} className="min-w-[85%]">
                <div className="flex items-center p-2">
                  <img
                    src={favorite.img_url}
                    alt="favori"
                    className="rounded-full aspect-square w-16"
                  />

                  <figcaption className="text-m leading-4 max-w-[75%] ml-4">
                    {favorite.name}
                  </figcaption>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => handleRemove(favorite.shop_id)}
              >
                <FontAwesomeIcon
                  icon={faHeartSolid}
                  className="text-2xl text-red-700 mr-5"
                />
              </button>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
