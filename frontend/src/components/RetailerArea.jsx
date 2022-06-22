import { useState } from "react";
import logo from "../assets/images/logo.png";

export default function RetailerArea() {
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

  const [search, setSearch] = useState("");

  const clearInput = () => {
    setSearch("");
  };

  return (
    <div className="grid place-items-center">
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="max-w-xs m-4" />
        <h1 className="text-xl">Espace commerçant</h1>
        <div>
          <h2>Voir ma boutique : Magasin Fossier Reims Cathédrale</h2>
        </div>
        <div className="mt-2 border-t-2 border-black">
          <h2>Mes informations :</h2>
          <form className="flex flex-col justify-center items-center">
            {retailerFormFields.map((field) => (
              <label
                htmlFor={field.title}
                className="flex flex-col justify-center items-center "
              >
                {field.title}
                <input id={field.title} type="text" className="mb-1" />
              </label>
            ))}
          </form>
          <button
            type="button"
            className="rounded-lg shadow-lg bg-white p-2 mt-2"
          >
            Modifier les informations
          </button>
        </div>
        <div className="mt-2 border-t-2 border-black">
          <h2>Mes produits : </h2>
          <ul>
            {retailerRecordedProducts.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
          <label htmlFor="productSearch">
            Ajouter des produits
            <input
              id="productSearch"
              type="text"
              placeholder="Votre recherche"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
          <button type="button" className="button-search" onClick={clearInput}>
            ✖️
          </button>
          <ul className="waste-result">
            {productsList
              .filter(
                (product) => search !== "" && product.name.startsWith(search)
              )
              .map((product) => (
                <li key={product.id}>{product.name}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
