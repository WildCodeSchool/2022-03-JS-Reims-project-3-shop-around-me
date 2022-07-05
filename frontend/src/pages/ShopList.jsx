import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ShopList() {
  const [results, setResults] = useState([]);
  const [types, setTypes] = useState([]);

  const getResults = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/shops`
      )
      .then((response) => response.data)
      .then((data) => {
        setResults(data);
      });
  };

  const getTypes = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/types`
      )
      .then((response) => response.data)
      .then((data) => {
        setTypes(data);
      });
  };

  const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  useEffect(() => {
    getResults();
    getTypes();
  }, []);

  return (
    <>
      <h1 className="text-center m-6 text-2xl font-bold">Catalogue</h1>
      <ul className="mb-16">
        {types.map((res) => (
          <li key={res.id}>
            <h2 className="p-4 text-lg font-bold bg-[#9c958e]">
              {capitalize(res.type)}
            </h2>
            <ul className="ml-6 my-4">
              {results.map(
                (resul) =>
                  res.type === resul.type && (
                    <li className="my-2" key={resul.id}>
                      <Link to="/shopDetails">{resul.name}</Link>
                    </li>
                  )
              )}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
