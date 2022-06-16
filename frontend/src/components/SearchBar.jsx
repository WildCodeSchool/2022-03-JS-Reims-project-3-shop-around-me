import { useRef, useState } from "react";
import axios from "axios";
import logo from "../assets/images/logo.png";
import Map from "./Map";

export default function SearchBar() {
  const searchValue = useRef();

  const [results, setResults] = useState([]);
  const getResults = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/products/?search=${searchValue.current.value}`
      )
      .then((response) => response.data)
      .then((data) => {
        setResults(data);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return searchValue.current?.value.length > 1 && getResults();
  };

  return (
    <div className="grid place-items-center">
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="max-w-xs m-4" />
        <form
          className="flex rounded-3xl border-solid border border-gray-200 w-min p-2 hover:bg-gray-100 bg-white"
          onSubmit={handleSubmit}
        >
          <label htmlFor="search">
            <input
              className="text-gray-500
          placeholder-gray-300
          border-none bg-transparent focus:outline-none
          ml-2 mr-2 min-w-[80vw] min-h-[5vh]"
              id="search"
              type="text"
              name="search"
              placeholder="Tapez: 'Biscuit Roses de Reims'"
              ref={searchValue}
            />
          </label>
          <button type="submit">🔎</button>
        </form>
      </div>
      {results.length !== 0 && <Map searchValue={searchValue.current?.value} />}
      <ul>
        {results.map((result) => (
          <li
            key={result.id}
            className="text-[#4F4E47] bg-white
              ml-4 mr-4 min-w-[90vw] min-h-[5vh] border-solid border border-dark-gray-500 rounded-3xl m-4 p-4"
          >
            Nom du produit : {result.name} <br /> Marque : {result.brand} <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
