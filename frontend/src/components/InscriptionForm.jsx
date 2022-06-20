/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import axios from "axios";

export default function InscriptionForm() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm();

  const { isSubmitSuccessful } = formState;

  const onSubmit = async (data) => {
    try {
      const resp = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/users`,
        data
      );
      console.warn(resp.data);
    } catch (err) {
      console.warn(err.data);
    }
  };

  return (
    <div className="grid place-items-center w-screen">
      <h2 className="block uppercase tracking-wide text-white text-xl font-bold mt-6 mb-6">
        Incription
      </h2>
      {isSubmitSuccessful && (
        <div
          className="bg-lime-100 border border-lime-400 text-lime-700 px-4 py-3 rounded"
          role="alert"
        >
          <span className="block sm:inline">
            Votre inscription a été prise en compte.
          </span>
        </div>
      )}
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="form-label" htmlFor="grid-firstname">
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
            </label>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="form-label" htmlFor="grid-lastname">
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
            </label>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="form-label" htmlFor="grid-birthdate">
              Date de naissance
              <input
                type="text"
                placeholder="01/01/2000"
                {...register("birthdate", {
                  required: true,
                  pattern:
                    /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
                })}
                className="form-input"
                id="grid-birthdate"
              />
              {errors?.birthdate?.type === "required" && (
                <p className="error-handler">Ce champ est requis.</p>
              )}
              {errors?.birthdate?.type === "pattern" && (
                <p className="error-handler">
                  Merci de respecter le format suivant : "jj/mm/aaaa".
                </p>
              )}
            </label>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="form-label" htmlFor="grid-gender">
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
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              {errors?.gender?.type === "required" && (
                <p className="error-handler">Ce champ est requis.</p>
              )}
            </label>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="grid-city" className="form-label">
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
              />
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
            </label>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="grid-zipcode" className="form-label">
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
              />
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
            </label>
          </div>
        </div>
        <label htmlFor="email" className="form-label">
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
          />
          {errors?.email?.type === "required" && (
            <p className="error-handler">Ce champ est requis.</p>
          )}
          {errors?.email?.type === "minLength" && (
            <p className="error-handler">Votre adresse mail est trop courte.</p>
          )}
          {errors?.email?.type === "maxLength" && (
            <p className="error-handler">Votre adresse mail est trop longue.</p>
          )}
          {errors?.email?.type === "pattern" && (
            <p className="error-handler">
              Votre adresse mail n'est pas valide.
            </p>
          )}
        </label>
        <label htmlFor="password" className="form-label">
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
          {errors?.password?.type === "required" && (
            <p className="error-handler">Ce champ est requis.</p>
          )}
          {errors?.password?.type === "minLength" && (
            <p className="error-handler">Votre mot de passe est trop court.</p>
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
        </label>
        <label htmlFor="password" className="form-label">
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
          {errors?.password?.type === "required" && (
            <p className="error-handler">Ce champ est requis.</p>
          )}
          {errors?.password?.type === "minLength" && (
            <p className="error-handler">Votre mot de passe est trop court.</p>
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
        </label>
        <input
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        />
        <br />
        <span>Vous avez déjà un compte ?Connectez-vous.</span>
      </form>
    </div>
  );
}
