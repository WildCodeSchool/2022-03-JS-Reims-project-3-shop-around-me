import { Link } from "react-router-dom";

export default function MyAccount() {
  return (
    <section className="flex flex-col gap-y-6 w-screen bg-white shadow-md rounded px-8 pt-6 pb-8">
      <h2 className="text-lg">Mon compte</h2>
      <ul>
        <li className="flex justify-between">
          Historique cagnotte
          <svg
            className="fill-current h-4 w-4 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
          </svg>
        </li>
        <li>
          <Link to="/mydata" className="flex justify-between">
            Données personnelles
            <svg
              className="fill-current h-4 w-4 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
            </svg>
          </Link>
        </li>
        <li className="flex justify-between">
          Paramètres de l'application
          <svg
            className="fill-current h-4 w-4 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
          </svg>
        </li>
        <li className="flex justify-between">
          Aide et contact
          <svg
            className="fill-current h-4 w-4 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
          </svg>
        </li>
        <li className="flex justify-between">
          Supprimer des données
          <svg
            className="fill-current h-4 w-4 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
          </svg>
        </li>
      </ul>
      <button type="button">Se déconnecter</button>
    </section>
  );
}
