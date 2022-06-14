/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";

export default function InscriptionForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
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
            maxLength: 80,
          })}
        />
      </label>
      <label htmlFor="lastName">
        Nom
        <input
          type="text"
          placeholder="Doe"
          {...register("lastNname", {
            required: true,
            minLength: 3,
            maxLength: 100,
          })}
        />
      </label>
      <label htmlFor="birthDate">
        Date de naissance
        <input
          type="date"
          placeholder="01/01/2000"
          {...register("birthDate", { require: true })}
        />
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
      </label>
      <label htmlFor="city">
        Ville
        <input
          type="text"
          placeholder="Paris"
          {...register({ required: false, minLength: 3, maxLength: 80 })}
        />
      </label>
      <label htmlFor="zipcode">
        Code postal
        <input
          type="text"
          placeholder="75020"
          {...register("zipcode", {
            required: false,
            minLength: 4,
            maxLength: 5,
          })}
        />
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
      </label>
      <input type="submit" />
    </form>
  );
}
