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
    console.warn(searchValue.current.value);
    getResults();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input
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
            <li>{result.name}</li>
          ))}
      </ul>
    </>
  );
}
