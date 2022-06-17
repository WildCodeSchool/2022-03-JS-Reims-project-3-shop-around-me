/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.warn(JSON.stringify(data));
  };

  return (
    <div className="grid place-items-center h-screen bg-white">
      <h2 className="block uppercase tracking-wide text-gray-700 text-s font-bold">
        Connexion
      </h2>
      <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
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
          {errors?.email?.type === "required" && (
            <p className="text-red-600 normal-case text-xs font-normal italic">
              Ce champ est requis.
            </p>
          )}
        </label>
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
          {errors?.password?.type === "required" && (
            <p className="text-red-600 normal-case text-xs font-normal italic">
              Ce champ est requis.
            </p>
          )}
        </label>
        <input type="submit" />
      </form>
      <span>
        Vous n’avez pas de compte ?
        <Link to="/inscription">
          <strong> Inscrivez-vous</strong>
        </Link>
      </span>
    </div>
  );
}
