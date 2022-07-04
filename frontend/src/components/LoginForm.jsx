/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function LoginForm() {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <main className="flex flex-col w-screen px-8 pt-8 pb-8 gap-y-8 tracking-wide">
      <picture className="self-center">
        <img src={logo} alt="logo" className="max-w-xs m-4" />
      </picture>
      <form className="flex flex-col">
        <div className="form-structure">
          <label
            htmlFor="email"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4"
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
            className="block uppercase tracking-wide text-[#4F4E47] text-sm font-bold mb-4"
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
          <input type="checkbox" value="" className="checkbox mt-2" />
          <label htmlFor="checkbox" className="text-[#4F4E47] normal-case ml-2">
            Resté connecté
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
