import { useForm } from "react-hook-form";

export default function InscriptionForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">
        Prénom
        <input
          type="text"
          name="firstName"
          ref={register({ required: true })}
        />
      </label>
      <label htmlFor="lastName">
        Nom
        <input type="text" name="lastName" ref={register({ required: true })} />
      </label>
      <label htmlFor="birthDate">
        Date de naissance
        <input type="date" name="birthDate" ref={register({ require: true })} />
      </label>
      <label htmlFor="gender">
        Genre
        <select name="gender" id="">
          <option value="female">Femme</option>
        </select>
      </label>
      <label htmlFor="email">
        Email
        <input type="text" name="email" ref={register({ required: true })} />
      </label>
      <label htmlFor="password">
        Mot de passe
        <input
          type="password"
          name="password"
          ref={register({ required: true })}
        />
      </label>
      <input type="submit" />
    </form>
  );
}
