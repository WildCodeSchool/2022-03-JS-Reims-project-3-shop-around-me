import { useForm } from "react-hook-form";

export default function InscriptionForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="firstName" ref={register({ required: true })} />
      <input type="text" name="lastName" ref={register({ required: true })} />
      <input type="date" name="birthdate" ref={register({ require: true })} />
      <select name="gender" id="">
        <option value="female">Femme</option>
      </select>
      <input type="text" name="email" ref={register({ required: true })} />
      <input type="password" name="password" />

      <input type="submit" />
    </form>
  );
}
