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
            pattern: /^([ \u00c0-\u01ffa-zA-Z'-])+$/i,
          })}
        />
        {errors?.firstName?.type === "required" && <p>Ce champ est requis.</p>}
        {errors?.firstName?.type === "minLength" && (
          <p>Votre prénom ne peut pas faire moins de 3 caractères.</p>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <p>Votre prénom ne peut pas exceder 50 caractères.</p>
        )}
        {errors?.firstName?.type === "pattern" && (
          <p>Ce champ n'accèpte pas la saisie de caractères spéciaux.</p>
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
            pattern: /^([ \u00c0-\u01ffa-zA-Z'-])+$/i,
          })}
        />
        {errors?.lastName?.type === "required" && <p>Ce champ est requis.</p>}
        {errors?.lastName?.type === "minLength" && (
          <p>Votre nom ne peut pas faire moins de 3 caractères.</p>
        )}
        {errors?.lastName?.type === "maxLength" && (
          <p>Votre nom ne peut pas exceder 80 caractères.</p>
        )}
        {errors?.lastName?.type === "pattern" && (
          <p>Ce champ n'accèpte pas la saisie de caractères spéciaux.</p>
        )}
      </label>
      <label htmlFor="birthDate">
        Date de naissance
        <input
          type="date"
          placeholder="01/01/2000"
          {...register("birthDate", {
            require: true,
            pattern:
              /\s+(?:0[1-9]|[12][0-9]|3[01])[-/.](?:0[1-9]|1[012])[-/.](?:19\d{2}|20[01][0-9]|2020)\b/,
          })}
        />
        {errors?.birthdate?.type === "required" && <p>Ce champ est requis.</p>}
        {errors?.birthdate?.type === "pattern" && (
          <p>Merci de respecter le format suivant : "jj/mm/aaaa".</p>
        )}
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
          {...register({
            required: false,
            minLength: 3,
            maxLength: 80,
            pattern: /^([ \u00c0-\u01ffa-zA-Z'-])+$/i,
          })}
        />
        {errors?.city?.type === "minLength" && (
          <p>Le nom de votre ville ne peut pas faire moins de 3 caractères.</p>
        )}
        {errors?.city?.type === "maxLength" && (
          <p>Le nom de votre ville ne peut pas exceder 80 caractères.</p>
        )}
        {errors?.city?.type === "pattern" && (
          <p>Ce champs n'accepte pas les caractères spéciaux.</p>
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
            pattern: /^[0-9]{4}$/,
          })}
        />
        {errors?.zipcode?.type === "minLength" && (
          <p>Votre code postal ne peut pas faire moins de 4 caractères.</p>
        )}
        {errors?.zipcode?.type === "maxLength" && (
          <p>Votre code postal ne peut pas faire plus de 8 caractères.</p>
        )}
        {errors?.zipcode?.type === "pattern" && (
          <p>Ce champs n'accepte pas les caractères spéciaux.</p>
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
            pattern: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}/i,
          })}
        />
        {errors?.email?.type === "required" && <p>Ce champ est requis.</p>}
        {errors?.email?.type === "minLength" && (
          <p>Votre adresse mail est trop courte.</p>
        )}
        {errors?.email?.type === "maxLength" && (
          <p>Votre adresse mail est trop longue.</p>
        )}
        {errors?.email?.type === "pattern" && (
          <p>Votre adresse mail n'est pas valide.</p>
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
            pattern:
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          })}
        />
        {errors?.password?.type === "required" && <p>Ce champ est requis.</p>}
        {errors?.password?.type === "minLength" && (
          <p>Votre mot de passe est trop court.</p>
        )}
        {errors?.password?.type === "maxLength" && (
          <p>Votre mot de passe est trop long.</p>
        )}
        {errors?.password?.type === "pattern" && (
          <p>Votre mot de passe n'est pas valide.</p>
        )}
      </label>
      <input type="submit" disabled={isSubmitting} />
    </form>
  );
}
