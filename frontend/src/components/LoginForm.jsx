/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../contexts/AuthContext";
import VerticalLogo from "./VerticalLogo";

export default function LoginForm() {
  const { loginData, setLoginData } = useAuthContext();
  const {
    register,
    formState: { errors },
    getValues,
  } = useForm();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = getValues();
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/login`,
        { email, password }
      )
      .then((res) => {
        res.data.user.fund = 1.93;
        setLoginData({ ...res.data, isLoggedIn: true });
      });
  };

  useEffect(() => {
    if (loginData.isLoggedIn) {
      navigate("/home");
    }
  });

  return (
    <main className="flex flex-col w-screen px-8 pt-8 pb-8 gap-y-4 tracking-wide text-[#4F4E47]">
      <VerticalLogo />
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <p className="text-2xl">Bienvenue !</p>
        <p className="text-m mb-8 leading-4">
          Connectez-vous ou inscrivez-vous pour accèder à vos boutiques
          favorites ainsi qu'à votre cagnotte.
        </p>
        <div className="form-structure text-[#4F4E47] ">
          <label
            htmlFor="email"
            className="block uppercase tracking-wide text-xs font-bold mb-4"
          >
            Email
            <input
              type="text"
              {...register("email", {
                required: true,
              })}
              className="form-input"
            />
          </label>
          {errors?.email?.type === "required" && (
            <p className="text-red-600 normal-case text-xs font-normal italic">
              Ce champ est requis.
            </p>
          )}
          <label
            htmlFor="password"
            className="block uppercase tracking-wide  text-sm font-bold mb-4"
          >
            Mot de passe
            <input
              type="password"
              {...register("password", {
                required: true,
              })}
              className="form-input"
            />
          </label>
          {errors?.password?.type === "required" && (
            <p className="text-red-600 normal-case text-xs font-normal italic">
              Ce champ est requis.
            </p>
          )}
          <label htmlFor="checkbox" className=" normal-case ml-2 mb-4">
            <input type="checkbox" value="" className="checkbox mt-2" />
            Resté connecté(e)
          </label>
        </div>
        <input
          type="submit"
          className="text-m mt-4 py-3 border-solid border-2 border-green-900 text-green-900 font-bold rounded focus:outline-none focus:shadow-outline"
        />
      </form>
      <p>
        Vous n’avez pas de compte ? {}
        <Link to="/inscription" className="underline underline-offset-1">
          Inscrivez-vous ici
        </Link>
      </p>
    </main>
  );
}
