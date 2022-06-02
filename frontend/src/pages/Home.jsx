import { useRef, useState } from "react";
import axios from "axios";

export default function Home() {
  const searchValue = useRef();

  const [results, setResults] = useState([]);
  const getResults = () => {
    axios
      .get("http://localhost:5001/products/")
      .then((response) => response.data)
      .then((data) => {
        setResults(data);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getResults();
  };

  return (
    <>
      <form
        className="flex rounded-3xl border-solid border border-gray-200 w-min p-2 hover:bg-gray-100 ml-4 mt-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="search">
          <input
            className="text-gray-500
            placeholder-gray-300
            border-none bg-transparent focus:outline-none
            ml-2 mr-2 min-w-[40vw] min-h-[5vh]"
            id="search"
            type="text"
            name="search"
            placeholder="Recherche ..."
            ref={searchValue}
          />
        </label>
        <button type="submit">🔎</button>
      </form>
      <ul>
        {results
          .filter((result) => result.name.includes(searchValue.current.value))
          .map((result) => (
            <li
              key={result.id}
              className="text-gray-500
              ml-4 mr-4 min-w-[40vw] min-h-[5vh] border-solid border border-dark-gray-500 rounded-3xl m-4 p-4"
            >
              Nom du produit : {result.name} <br /> Marque : {result.brand}{" "}
              <br /> Description : {result.description}
            </li>
          ))}
      </ul>
    </>
  );
}
