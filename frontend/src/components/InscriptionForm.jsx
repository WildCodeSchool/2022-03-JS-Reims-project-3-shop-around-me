/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";

const wait = function (duration = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
};
export default function InscriptionForm() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm();
  const { isSubmitting } = formState;

  const onSubmit = async (data) => {
    await wait(2000);
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">
        Prénom
        <input
          type="text"
          placeholder="Jane"
          {...register("firstName", {
            required: true,
            minLength: 3,
            maxLength: 50,
          })}
        />
        {errors?.firstName?.type === "required" && <p>Ce champ est requis.</p>}
        {errors?.firstName?.type === "minLength" && (
          <p>Votre prénom ne peut pas faire moins de 3 caractères.</p>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <p>Votre prénom ne peut pas exceder 50 caractères.</p>
        )}
      </label>
      <label htmlFor="lastName">
        Nom
        <input
          type="text"
          placeholder="Doe"
          {...register("lastNname", {
            required: true,
            minLength: 3,
            maxLength: 80,
          })}
        />
        {errors?.lastName?.type === "required" && <p>Ce champ est requis.</p>}
        {errors?.lastName?.type === "minLength" && (
          <p>Votre nom ne peut pas faire moins de 3 caractères.</p>
        )}
        {errors?.lastName?.type === "maxLength" && (
          <p>Votre nom ne peut pas exceder 80 caractères.</p>
        )}
      </label>
      <label htmlFor="birthDate">
        Date de naissance
        <input
          type="date"
          placeholder="01/01/2000"
          {...register("birthDate", { require: true })}
        />
        {errors?.birthdate?.type === "required" && <p>Ce champ est requis.</p>}
      </label>
      <label htmlFor="gender">
        Genre
        <select name="gender" {...register("gender", { required: true })}>
          <option value="female">Femme</option>
          <option value="male">Homme</option>
          <option value="non-binary">Non-binaire</option>
          <option value="other">Autre</option>
          <option value="not-tell">Ne se prononce pas</option>
        </select>
        {errors?.gender?.type === "required" && <p>Ce champ est requis.</p>}
      </label>
      <label htmlFor="city">
        Ville
        <input
          type="text"
          placeholder="Paris"
          {...register({ required: false, minLength: 3, maxLength: 80 })}
        />
        {errors?.city?.type === "minLength" && (
          <p>Le nom de votre ville ne peut pas faire moins de 3 caractères.</p>
        )}
        {errors?.city?.type === "maxLength" && (
          <p>Le nom de votre ville ne peut pas exceder 80 caractères.</p>
        )}
      </label>
      <label htmlFor="zipcode">
        Code postal
        <input
          type="text"
          placeholder="75020"
          {...register("zipcode", {
            required: false,
            minLength: 4,
            maxLength: 8,
          })}
        />
        {errors?.zipcode?.type === "minLength" && (
          <p>Votre code postal ne peut pas faire moins de 4 caractères.</p>
        )}
        {errors?.zipcode?.type === "maxLength" && (
          <p>Votre code postal ne peut pas faire plus de 8 caractères.</p>
        )}
      </label>
      <label htmlFor="email">
        Email
        <input
          type="text"
          placeholder="jane.doe@gmail.com"
          {...register("email", {
            required: true,
            minLength: 10,
            maxLength: 100,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        {errors?.email?.type === "required" && <p>Ce champ est requis.</p>}
        {errors?.email?.type === "minLength" && (
          <p>Votre adresse mail est trop courte.</p>
        )}
        {errors?.email?.type === "maxLength" && (
          <p>Votre adresse mail est trop longue.</p>
        )}
      </label>
      <label htmlFor="password">
        Mot de passe
        <input
          type="password"
          {...register("password", {
            required: true,
            minLength: 8,
            maxLength: 100,
          })}
        />
        {errors?.password?.type === "required" && <p>Ce champ est requis.</p>}
        {errors?.password?.type === "minLength" && (
          <p>Votre mot de passe est trop court.</p>
        )}
        {errors?.password?.type === "maxLength" && (
          <p>Votre mot de passe est trop long.</p>
        )}
      </label>
      <input type="submit" disabled={isSubmitting} />
    </form>
  );
}
