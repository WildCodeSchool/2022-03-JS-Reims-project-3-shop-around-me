import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../contexts/AuthContext";
import logo from "../assets/images/logo_alone.png";

export default function Fav() {
  const [fav, setFav] = useState([]);
  const { loginData, setLoginData } = useAuthContext();
  const { user } = loginData;
  // eslint-disable-next-line no-unused-vars
  const setUser = (userObject) => {
    setLoginData({ ...loginData, user: userObject });
  };
  const getFavorite = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/shop_user/${user.id}`
      )
      .then((response) => setFav(response.data));
  };

  const removeFavorite = (shopId) => {
    axios
      .delete(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/shop_user/shops/${shopId}/user/${user.id}`
      )
      .then((response) => response.data);
  };

  useEffect(() => {
    getFavorite();
  }, [fav]);

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
      <div className="flex flex-col gap-x-4 gap-y-4 mb-16 text-[#4F4E47]">
        {fav.map((favorite) => (
          <figure
            key={favorite.shop_id}
            className="flex w-[100%] mt-1 mb-1 justify-between items-center bg-white rounded-lg p-2"
          >
            <img
              src={favorite.img_url}
              alt="favori"
              className="clip-circle w-[86px] h-[86px] object-cover"
            />
            <figcaption className=" self-center justify-self-center text-m leading-4 max-w-[75%]">
              {favorite.name}
            </figcaption>
            <button
              type="button"
              onClick={() => handleRemove(favorite.shop_id)}
            >
              <FontAwesomeIcon
                icon={faHeartSolid}
                className="text-2xl text-red-700 mr-3"
              />
            </button>
          </figure>
        ))}
      </div>
    </section>
  );
}
