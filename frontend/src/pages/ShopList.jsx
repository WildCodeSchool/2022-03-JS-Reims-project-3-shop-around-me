import axios from "axios";
import { useState, useEffect } from "react";

export default function ShopList() {
  const [results, setResults] = useState([]);

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

  useEffect(() => {
    getResults();
  }, []);

  return (
    <>
      <h1>Catalogue</h1>
      <ul>
        {results
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
      </ul>
    </>
  );
}
