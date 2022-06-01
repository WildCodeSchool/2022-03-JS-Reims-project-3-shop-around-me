import { useRef } from "react";

export default function Home() {
  const searchValue = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.warn(searchValue.current.value);
  };

  return (
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
  );
}
