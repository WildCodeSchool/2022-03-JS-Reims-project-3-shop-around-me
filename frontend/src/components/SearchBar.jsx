import { useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import VerticalLogo from "./VerticalLogo";
import HorizontalLogo from "./HorizontalLogo";
import Map from "./Map";
import { useAddress } from "../contexts/AddressContext";

export default function SearchBar() {
  const searchValue = useRef();
  const { results, setResults, addressesConversion } = useAddress();
  const getResults = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/shops/?search=${searchValue.current?.value.split(" ")[0]}`
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

  const userGeolocation = [49.255, 4.03];

  const distanceProperty = () => {
    results.forEach((element) => {
      const distance =
        Math.abs(element.y - userGeolocation[0]) +
        Math.abs(element.x - userGeolocation[1]);
      // eslint-disable-next-line no-param-reassign
      element.distance = distance;
    });
  };

  useEffect(() => {
    addressesConversion();
    distanceProperty();
  }, [JSON.stringify(results)]);

  return (
    <main className="items-center">
      <div
        className={`flex flex-col justify-center items-center ${
          results.length > 0 ? "mt-0" : "mt-20"
        } small-height:mt-0`}
      >
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
              placeholder="Rechercher un produit, une marque..."
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
      <ul className="mb-3">
        {results
          .sort((a, b) => a.distance - b.distance)
          .map((result) => (
            <li
              key={result.id}
              className="text-[#4F4E47] bg-white
              ml-4 mr-4 min-w-[90vw] min-h-[5vh] border-solid border border-dark-gray-500 rounded-3xl m-4 p-4"
            >
              <Link to={`/shops/${result.id}`}>
                {result.name} <br /> {result.address}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
}
