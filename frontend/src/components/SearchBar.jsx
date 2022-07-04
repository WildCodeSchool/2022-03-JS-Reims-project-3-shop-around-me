import { useRef, useState } from "react";
import axios from "axios";
import Logo from "./Logo";
import Map from "./Map";

export default function SearchBar() {
  const searchValue = useRef();

  const [results, setResults] = useState([]);
  const getResults = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/shops/?search=${searchValue.current.value}`
      )
      .then((response) => response.data)
      .then((data) => {
        Promise.all(
          data.map((result) =>
            result.address
              ? {
                  data: {
                    features: [{ properties: { label: result.address } }],
                  },
                }
              : axios.get(
                  `https://api-adresse.data.gouv.fr/reverse/?lon=${result.x}&lat=${result.y}`
                )
          )
        ).then((responses) => {
          setResults(
            data.map((result, index) => ({
              ...result,
              address: responses[index].data.features[0].properties.label,
            }))
          );
        });
      });
  };

  const getAddress = (lat, lon) => {
    axios
      .get(`https://api-adresse.data.gouv.fr/reverse/?lon=${lon}&lat=${lat}`)
      .then((response) => response.data.features[0].properties.label)
      .then((address) => console.warn(address));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getAddress(results.x, results.y);
    return searchValue.current?.value.length > 1 && getResults();
  };

  return (
    <div className="grid place-items-center">
      <div className="flex flex-col justify-center items-center">
        <Logo />
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
      {results.length !== 0 && (
        <Map searchValue={searchValue.current?.value} results={results} />
      )}
      <ul>
        {results.map((result) => (
          <li
            key={result.id}
            className="text-[#4F4E47] bg-white
              ml-4 mr-4 min-w-[90vw] min-h-[5vh] border-solid border border-dark-gray-500 rounded-3xl m-4 p-4"
          >
            {result.name} <br /> {result.address}
          </li>
        ))}
      </ul>
    </div>
  );
}
