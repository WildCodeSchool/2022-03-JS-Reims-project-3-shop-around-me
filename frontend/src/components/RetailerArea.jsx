import { useState } from "react";
import logo from "../assets/images/logo.png";

const retailerFormFields = [
  {
    id: 1,
    title: "Nom",
  },
  {
    id: 2,
    title: "Adresse",
  },
  {
    id: 3,
    title: "Code postal",
  },
  {
    id: 4,
    title: "Ville",
  },
  {
    id: 5,
    title: "Horaires",
  },
];

const retailerRecordedProducts = [
  {
    id: 1,
    name: "Biscuit Rose",
  },
  {
    id: 2,
    name: "Croquignoles",
  },
  {
    id: 3,
    name: "Macarons",
  },
  {
    id: 4,
    name: "Galettes de Reims",
  },
  {
    id: 5,
    name: "Thé Dammann",
  },
];

const productsList = [
  {
    id: 1,
    name: "Champagne Mumm Cordon Rouge",
  },
  {
    id: 2,
    name: "Ratafia de Champagne",
  },
  {
    id: 3,
    name: "Miel de la Champagne",
  },
  {
    id: 4,
    name: "Bonbons au chocolat",
  },
  {
    id: 5,
    name: "Tisane infusion passion framboise",
  },
];

export default function RetailerArea() {
  const [search, setSearch] = useState("");

  return (
    <main className="grid place-items-center block uppercase tracking-wide text-[#4F4E47] mb-2">
      <img src={logo} alt="logo" className="max-w-xs m-4" />
      <div className="flex flex-col justify-center w-4/5">
        <h1 className="text-xl font-bold mb-8 mt-4 text-center">
          Espace commerçant
        </h1>
        <section className="border-t-2 border-[#4F4E47]">
          <h2 className="font-bold mb-2">Voir ma boutique : </h2>
          <p className="flex justify-between text-xs mb-2">
            Magasin Fossier Reims Cathédrale
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
            </svg>
          </p>
        </section>
        <section className="mt-2 border-t-2 border-[#4F4E47]">
          <h2 className="text-s font-bold mb-2">Mes informations :</h2>
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3 md:mb-0">
                {retailerFormFields.map((field) => (
                  <label
                    htmlFor={field.title}
                    className="text-xs mb-2"
                    key={field.id}
                  >
                    {field.title}
                    <input
                      id={field.title}
                      type="text"
                      className="appearance-none block w-full bg-gray-200 border border-[#4F4E47] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                  </label>
                ))}
              </div>
            </div>
            <input
              type="submit"
              className="block uppercase tracking-wide text-xs"
            />
          </form>
          <button
            type="button"
            className="block uppercase tracking-wide text-xs mb-2"
          >
            Modifier les informations
          </button>
        </section>
        <section className="mt-2 border-t-2 border-[#4F4E47] text-s mb-4">
          <h2 className="font-bold mb-2">Mes produits : </h2>
          <ul className="mb-2">
            {retailerRecordedProducts.map((product) => (
              <li key={product.id} className="text-xs">
                {product.name} ✖️
              </li>
            ))}
          </ul>
          <div className="flex justify-left">
            <label htmlFor="productSearch" className="w-full text-xs mb-2">
              Ajouter des produits :
              <input
                id="productSearch"
                type="text"
                placeholder="Votre recherche"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="appearance-none block w-full bg-gray-200 border border-[#4F4E47] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </label>
          </div>

          <ul className="mb-12">
            {productsList
              .filter(
                (product) => search !== "" && product.name.includes(search)
              )
              .map((product) => (
                <li
                  key={product.id}
                  className="text-xs overflow-hidden overflow-y-auto self-start"
                >
                  {product.name} ➕
                </li>
              ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
