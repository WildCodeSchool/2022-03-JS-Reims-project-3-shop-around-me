import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo_alone.png";

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

  const alphabetize = (a, b) => {
    return a.name.localeCompare(b.name);
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <main className="flex flex-col w-screen tracking-wide text-[#4F4E47]">
      <section className="px-8 pt-8">
        <img src={logo} alt="logo" className="max-w-[4rem] mr-2 mb-8" />
        <p className=" text-2xl">Catégories</p>
        <p className="text-m mb-6 leading-4">
          Retrouvez toutes les boutiques autour de vous, triées par catégories.
        </p>
      </section>
      <ul className="mb-16">
        {Object.keys(results)
          .sort()
          .map((type) => (
            <li key={type}>
              <details>
                <summary className="list-none my-2">
                  <div className="py-4 px-8 text-lg font-bold bg-[#9c958e] cursor-pointer flex justify-between">
                    {capitalize(type)} <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                </summary>
                <ul className="ml-12 my-4">
                  {results[type].sort(alphabetize).map((shop) => (
                    <li className="my-2" key={shop.id}>
                      <Link to={`/shops/${shop.id}`}>{shop.name}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
      </ul>
    </main>
  );
}
