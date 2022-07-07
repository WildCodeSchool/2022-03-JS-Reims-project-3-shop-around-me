/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../assets/images/logo_alone.png";

export default function InscriptionForm() {
  const {
    register,
    formState,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const { isSubmitSuccessful } = formState;

  const postUser = () => {
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/users`,
        getValues()
      )
      .then((response) => response);
  };

  return (
    <main className="flex flex-col w-screen px-8 pt-8 pb-8 tracking-wide">
      <img src={logo} alt="logo" className="max-w-[4rem] mb-8" />
      <form className="flex flex-col" onSubmit={handleSubmit(postUser)}>
        <p className="text-2xl text-[#4F4E47] mb-8">Inscrivez-vous.</p>
        {isSubmitSuccessful && (
          <p
            className="bg-lime-100 border border--400 text-lime-700 mb-6 px-4 py-3 rounded"
            role="alert"
          >
            Votre inscription a été prise en compte.
          </p>
        )}
        <div className="flex flex-col">
          <div className="form-structure">
            <label htmlFor="grid-firstname">
              Prénom
              <input
                type="text"
                placeholder="Jane"
                {...register("firstname", {
                  required: true,
                  minLength: 2,
                  maxLength: 50,
                  pattern: /^([ \u00c0-\u01ffa-zA-Z'-])+$/i,
                })}
                className="form-input"
                id="grid-firstname"
              />
            </label>
            {errors?.firstname?.type === "required" && (
              <p className="error-handler">Ce champ est requis.</p>
            )}
            {errors?.firstname?.type === "minLength" && (
              <p className="error-handler">
                Votre prénom ne peut pas faire moins de 2 caractères.
              </p>
            )}
            {errors?.firstname?.type === "maxLength" && (
              <p className="error-handler">
                Votre prénom ne peut pas exceder 50 caractères.
              </p>
            )}
            {errors?.firstname?.type === "pattern" && (
              <p className="error-handler">
                Ce champ n'accèpte pas la saisie de caractères spéciaux.
              </p>
            )}
          </div>
          <div className="form-structure">
            <label htmlFor="grid-lastname">
              Nom
              <input
                type="text"
                placeholder="Doe"
                {...register("lastname", {
                  required: true,
                  minLength: 2,
                  maxLength: 50,
                  pattern: /^([ \u00c0-\u01ffa-zA-Z'-])+$/i,
                })}
                className="form-input"
                id="grid-lastname"
              />
            </label>
            {errors?.lastname?.type === "required" && (
              <p className="error-handler">Ce champ est requis.</p>
            )}
            {errors?.lastname?.type === "minLength" && (
              <p className="error-handler">
                Votre prénom ne peut pas faire moins de 2 caractères.
              </p>
            )}
            {errors?.lastname?.type === "maxLength" && (
              <p className="error-handler">
                Votre prénom ne peut pas exceder 50 caractères.
              </p>
            )}
            {errors?.lastname?.type === "pattern" && (
              <p className="error-handler">
                Ce champ n'accèpte pas la saisie de caractères spéciaux.
              </p>
            )}
          </div>
          <div className="form-structure">
            <label htmlFor="grid-birthdate">
              Date de naissance
              <input
                type="text"
                placeholder="2000/01/01"
                {...register("birthdate", {
                  required: true,
                  pattern: /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/,
                })}
                className="form-input"
                id="grid-birthdate"
              />
            </label>
            {errors?.birthdate?.type === "required" && (
              <p className="error-handler">Ce champ est requis.</p>
            )}
            {errors?.birthdate?.type === "pattern" && (
              <p className="error-handler">
                Merci de respecter le format suivant : "aaaa/mm/jj".
              </p>
            )}
          </div>
          <div className="form-structure">
            <label htmlFor="grid-gender">
              Genre
              <div className="relative">
                <select
                  name="gender"
                  {...register("gender", { required: true })}
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="female">Femme</option>
                  <option value="male">Homme</option>
                  <option value="non-binary">Non-binaire</option>
                  <option value="other">Autre</option>
                  <option value="not-tell">Ne se prononce pas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-5 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </label>
            {errors?.gender?.type === "required" && (
              <p className="error-handler">Ce champ est requis.</p>
            )}
          </div>
          <div className="form-structure">
            <label htmlFor="grid-city">
              Ville
              <input
                type="text"
                placeholder="Paris"
                {...register("city", {
                  required: false,
                  minLength: 3,
                  maxLength: 80,
                  pattern: /^([ \u00c0-\u01ffa-zA-Z'-])+$/i,
                })}
                className="form-input"
              />{" "}
            </label>
            {errors?.city?.type === "minLength" && (
              <p className="error-handler">
                Le nom de votre ville ne peut pas faire moins de 3 caractères.
              </p>
            )}
            {errors?.city?.type === "maxLength" && (
              <p className="error-handler">
                Le nom de votre ville ne peut pas exceder 80 caractères.
              </p>
            )}
            {errors?.city?.type === "pattern" && (
              <p className="error-handler">
                Ce champs n'accepte pas les caractères spéciaux.
              </p>
            )}
          </div>
          <div className="form-structure">
            <label htmlFor="grid-zipcode">
              Code postal
              <input
                type="text"
                placeholder="75020"
                {...register("zipcode", {
                  required: false,
                  minLength: 4,
                  maxLength: 8,
                  pattern: /^[0-9]{3,}$/,
                })}
                className="form-input"
              />{" "}
            </label>
            {errors?.zipcode?.type === "minLength" && (
              <p className="error-handler">
                Votre code postal ne peut pas faire moins de 4 caractères.
              </p>
            )}
            {errors?.zipcode?.type === "maxLength" && (
              <p className="error-handler">
                Votre code postal ne peut pas faire plus de 8 caractères.
              </p>
            )}
            {errors?.zipcode?.type === "pattern" && (
              <p className="error-handler">
                Ce champs n'accepte pas les caractères spéciaux.
              </p>
            )}
          </div>
          <div className="form-structure">
            <label htmlFor="email">
              Email
              <input
                type="text"
                placeholder="jane.doe@gmail.com"
                {...register("email", {
                  required: true,
                  minLength: 10,
                  maxLength: 100,
                  pattern: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}/i,
                })}
                className="form-input"
              />{" "}
            </label>
            {errors?.email?.type === "required" && (
              <p className="error-handler">Ce champ est requis.</p>
            )}
            {errors?.email?.type === "minLength" && (
              <p className="error-handler">
                Votre adresse mail est trop courte.
              </p>
            )}
            {errors?.email?.type === "maxLength" && (
              <p className="error-handler">
                Votre adresse mail est trop longue.
              </p>
            )}
            {errors?.email?.type === "pattern" && (
              <p className="error-handler">
                Votre adresse mail n'est pas valide.
              </p>
            )}
          </div>
          <div className="form-structure">
            <label htmlFor="password">
              Mot de passe
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 100,
                  pattern:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                })}
                className="form-input"
              />
            </label>
            {errors?.password?.type === "required" && (
              <p className="error-handler">Ce champ est requis.</p>
            )}
            {errors?.password?.type === "minLength" && (
              <p className="error-handler">
                Votre mot de passe est trop court.
              </p>
            )}
            {errors?.password?.type === "maxLength" && (
              <p className="error-handler">Votre mot de passe est trop long.</p>
            )}
            {errors?.password?.type === "pattern" && (
              <p className="error-handler">
                Votre mot de passe doit au moins comporter une lettre en
                majuscule, une en minuscule, un chiffre et un caractère spécial.
              </p>
            )}
          </div>
          <div className="form-structure">
            <label htmlFor="password">
              Confirmation de mot de passe
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 100,
                  pattern:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                })}
                className="form-input"
              />
            </label>
            {errors?.password?.type === "required" && (
              <p className="error-handler">Ce champ est requis.</p>
            )}
            {errors?.password?.type === "minLength" && (
              <p className="error-handler">
                Votre mot de passe est trop court.
              </p>
            )}
            {errors?.password?.type === "maxLength" && (
              <p className="error-handler">Votre mot de passe est trop long.</p>
            )}
            {errors?.password?.type === "pattern" && (
              <p className="error-handler">
                Votre mot de passe doit au moins comporter une lettre en
                majuscule, une en minuscule, un chiffre et un caractère spécial.
              </p>
            )}
          </div>
          <input
            className="text-m mt-4 mb-8 py-3 border-solid border-2 border-green-900 text-green-900 font-bold rounded focus:outline-none focus:shadow-outline"
            type="submit"
          />
        </div>
        <p className="text-center text-sm">
          Vous avez déjà un compte ?{" "}
          <Link to="/" className="underline underline-offset-1">
            Connectez-vous.
          </Link>
        </p>
      </form>
    </main>
  );
}
