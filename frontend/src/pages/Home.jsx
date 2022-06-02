import { useRef } from "react";

export default function Home() {
  const searchValue = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.warn(searchValue.current.value);
  };

  return (
    <form
      className="flex rounded-3xl border-solid border border-gray-200 w-min p-2 hover:bg-gray-100"
      onSubmit={handleSubmit}
    >
      <label htmlFor="search">
        <input
          className="text-gray-500
          placeholder-gray-300
          border-none bg-transparent focus:outline-none
          ml-2 mr-2 min-w-[40vw] min-h-[5vh]"
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
