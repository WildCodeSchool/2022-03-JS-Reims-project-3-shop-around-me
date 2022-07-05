import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ShopList() {
  const [results, setResults] = useState({});

  const getResults = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/shops`
      )
      .then((response) => response.data)
      .then((data) => {
        setResults(
          data.reduce((acc, cur) => {
            acc[cur.type] = [cur, ...(acc[cur.type] ?? [])];
            return acc;
          }, {})
        );
      });
  };

  const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <>
      <h1 className="text-center m-6 text-2xl font-bold">Catalogue</h1>
      <ul className="mb-16">
        {Object.keys(results).map((type) => (
          <li key={type}>
            <h2 className="p-4 text-lg font-bold bg-[#9c958e]">
              {capitalize(type)}
            </h2>
            <ul className="ml-6 my-4">
              {results[type].map((shop) => (
                <li className="my-2" key={shop.id}>
                  <Link to="/shopDetails">{shop.name}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
