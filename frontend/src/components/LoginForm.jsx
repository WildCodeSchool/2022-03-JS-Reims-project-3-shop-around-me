import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.warn(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">
        Email <input type="text" />
      </label>
      <label htmlFor="password">
        Mot de passe <input type="password" />
      </label>
      <input type="submit" />
    </form>
  );
}
