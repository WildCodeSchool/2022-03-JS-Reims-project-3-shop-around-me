/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../contexts/AuthContext";

export default function PersonnalData() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const [editUser, setEditedUser] = useState(false);
  const { loginData, setLoginData } = useAuthContext();
  const { user } = loginData;
  const [personnalData, setPersonnalData] = useState({ ...user });

  const convertDateFRtoUS = (date) => {
    const dateArray = date.split("/");
    return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
  };

  const setUser = (userObject) => {
    setLoginData({ ...loginData, user: userObject });
  };

  const getUser = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/users/${
          user.id
        }`
      )
      .then((response) => response)
      .then((data) => {
        setUser(data.data);
      });
  };

  const putUser = () => {
    const userData = {
      ...getValues(),
      birthdate: convertDateFRtoUS(getValues().birthdate),
    };
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/users/${
          user.id
        }`,
        userData
      )
      .then((response) => response);
  };

  useEffect(() => {
    getUser();
  }, [user]);

  const handleSave = () => {
    setEditedUser(false);
    putUser();
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditedUser(true);
  };

  const handleChange = (e) => {
    setPersonnalData({ ...personnalData, [e.target.name]: e.target.value });
  };

  return (
    <main className=" flex flex-col gap-y-6 w-screen shadow-md rounded px-8 pt-6 pb-8">
      <h2 className="text-xl text-center font-bold uppercase text-[#4F4E47]">
        Mes informations
      </h2>
      {user && (
        <form className="flex flex-col" onSubmit={handleSubmit(handleSave)}>
          <div className="form-structure">
            <label htmlFor="grid-firstname">
              Prénom
              <input
                type="text"
                placeholder="Jane"
                {...register("firstname", {
                  value: personnalData.firstname,
                  required: true,
                  minLength: 2,
                  maxLength: 50,
                  pattern: /^([ \u00c0-\u01ffa-zA-Z'-])+$/i,
                  onChange: handleChange,
                })}
                disabled={!editUser}
                className={!editUser ? "form-input bg-slate-300" : "form-input"}
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
                  value: personnalData.lastname,
                  required: true,
                  minLength: 2,
                  maxLength: 50,
                  pattern: /^([ \u00c0-\u01ffa-zA-Z'-])+$/i,
                  onChange: handleChange,
                })}
                className={!editUser ? "form-input bg-slate-300" : "form-input"}
                disabled={!editUser}
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
                placeholder="JJ/MM/AAAA"
                {...register("birthdate", {
                  value: personnalData.birthdate,
                  required: true,
                  pattern:
                    /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
                  onChange: handleChange,
                })}
                className={!editUser ? "form-input bg-slate-300" : "form-input"}
                disabled={!editUser}
              />
            </label>
            {errors?.birthdate?.type === "required" && (
              <p className="error-handler">Ce champ est requis.</p>
            )}
            {errors?.birthdate?.type === "pattern" && (
              <p className="error-handler">
                Merci de respecter le format suivant : "jj/mm/aaaa".
              </p>
            )}
          </div>
          <div className="form-structure">
            <label htmlFor="grid-gender">
              Genre
              <select
                {...register("gender", {
                  value: personnalData.gender,
                  required: true,
                  onChange: handleChange,
                })}
                className={!editUser ? "form-input bg-slate-300" : "form-input"}
                disabled={!editUser}
              >
                <option value="select">Séléction...</option>
                <option value="female">Femme</option>
                <option value="male">Homme</option>
                <option value="non-binary">Non-binaire</option>
                <option value="other">Autre</option>
                <option value="not-tell">Ne se prononce pas</option>
              </select>
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
                  value: personnalData.city,
                  required: false,
                  minLength: 3,
                  maxLength: 80,
                  pattern: /^([ \u00c0-\u01ffa-zA-Z'-])+$/i,
                  onChange: handleChange,
                })}
                className={!editUser ? "form-input bg-slate-300" : "form-input"}
                disabled={!editUser}
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
                  value: personnalData.zipcode,
                  required: false,
                  minLength: 4,
                  maxLength: 8,
                  pattern: /^[0-9]{3,}$/,
                  onChange: handleChange,
                })}
                className={!editUser ? "form-input bg-slate-300" : "form-input"}
                disabled={!editUser}
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
                  value: personnalData.email,
                  required: true,
                  minLength: 10,
                  maxLength: 100,
                  pattern: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}/i,
                  onChange: handleChange,
                })}
                className={!editUser ? "form-input bg-slate-300" : "form-input"}
                disabled={!editUser}
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
          {editUser === true ? (
            <input
              type="submit"
              value="Valider mes modifications"
              className="text-sm py-3 ml-2 mr-2 mb-12 border-solid border-2 border-green-900 text-green-900 font-bold rounded focus:outline-none focus:shadow-outline"
            />
          ) : (
            <button
              type="button"
              className="text-sm py-3 ml-2 mr-2 mb-12 border-solid border-2 border-red-600 text-red-600 font-bold rounded focus:outline-none focus:shadow-outline"
              onClick={handleEdit}
            >
              Modifier mes informations
            </button>
          )}
        </form>
      )}
    </main>
  );
}
