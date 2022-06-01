import { useRef } from "react";

export default function Home() {
  const searchValue = useRef();

  const handleClick = () => {
    console.warn(searchValue.current.value);
  };

  return (
    <>
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          name="search"
          placeholder="Recherche ..."
          ref={searchValue}
        />
      </label>
      <button type="button" onClick={handleClick}>
        🔎
      </button>
    </>
  );
}
