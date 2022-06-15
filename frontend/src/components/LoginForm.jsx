import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.warn(JSON.stringify(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="email"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Email
          <input
            type="text"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </label>
        <label
          htmlFor="password"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Mot de passe
          <input
            type="password"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </label>
        <input type="submit" />
      </form>
      <span>Vous n’avez pas de compte ? Inscrivez-vous</span>
    </>
  );
}
