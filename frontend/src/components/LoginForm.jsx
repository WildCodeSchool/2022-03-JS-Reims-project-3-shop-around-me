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
        setLoginData({ ...res.data, isLoggedIn: true });
      });
  };

  useEffect(() => {
    if (loginData.isLoggedIn) {
      navigate("/home");
    }
  });

  return (
    <main className="flex flex-col justify-center items-center h-[78vh]">
      <VerticalLogo className="" />
      <form className="w-full max-w-lg w-4/5" onSubmit={handleSubmit}>
        <label
          htmlFor="email"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Email
          <input
            type="text"
            {...register("email", {
              required: true,
            })}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </label>
        {errors?.email?.type === "required" && (
          <p className="text-red-600 normal-case text-xs font-normal italic">
            Ce champ est requis.
          </p>
        )}
        <label
          htmlFor="password"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Mot de passe
          <input
            type="password"
            {...register("password", {
              required: true,
            })}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </label>
        {errors?.password?.type === "required" && (
          <p className="text-red-600 normal-case text-xs font-normal italic">
            Ce champ est requis.
          </p>
        )}

        <input type="submit" className="underline underline-offset-1" />
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
