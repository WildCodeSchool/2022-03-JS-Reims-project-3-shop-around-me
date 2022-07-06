import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useGeolocation from "react-hook-geolocation";
import VerticalLogo from "./VerticalLogo";
import HorizontalLogo from "./HorizontalLogo";
import Map from "./Map";

export default function SearchBar() {
  const searchValue = useRef();
  const userGeolocation = useGeolocation();

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
        setResults(data);
      });
  };

  useEffect(() => {
    Promise.all(
      results.map((result) =>
        // is the address completed in this shop table element ?
        result.address
          ? // if so, we return an object with the shop's address in the same format as the api-adresse.data.gouv address object
            {
              data: {
                features: [{ properties: { label: result.address } }],
              },
            }
          : // if not, we return an object with the shop's address thanks to api-adresse.data.gouv address object
            axios.get(
              `${
                import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
              }/address/reverse/?lon=${result.x}&lat=${result.y}`
            )
      )
    ).then((responses) => {
      setResults(
        results.map((result, index) => ({
          // we return an object with the shop's information, plus the address that we got from the api-adresse.data.gouv format object
          ...result,
          address: responses[index].data.features[0].properties.label,
        }))
      );
    });
  }, [JSON.stringify(results)]);

  const handleSubmit = (event) => {
    event.preventDefault();
    return searchValue.current?.value.length > 1 && getResults();
  };

  return (
    <main
      className={`grid place-items-center mb-14 ${
        results && results.length > 0 ? "" : "h-[100vh]"
      }`}
    >
      <div className="flex flex-col justify-center items-center">
        {results && results.length > 0 ? <HorizontalLogo /> : <VerticalLogo />}
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
        <Map
          searchValue={searchValue.current?.value}
          results={results}
          userGeolocation={userGeolocation}
        />
      )}
      <ul>
        {results.map((result) => (
          <li
            key={result.id}
            className="text-[#4F4E47] bg-white
              ml-4 mr-4 min-w-[90vw] min-h-[5vh] border-solid border border-dark-gray-500 rounded-3xl m-4 p-4"
          >
            <Link to="/shopDetails">
              {result.name} <br /> {result.address}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
