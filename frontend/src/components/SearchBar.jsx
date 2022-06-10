import { useRef } from "react";
import logo from "@assets/images/logo.png";

function SearchBar() {
  const searchValue = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    /*
    Placeholder for future functionality
    */
  };
  return (
    <div className="grid place-items-center h-screen bg-taupe-100">
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="max-w-xs m-4" />
        <form
          className="flex rounded-3xl border-solid border border-gray-200 w-min p-2 hover:bg-gray-100 bg-white"
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
      </div>
    </div>
  );
}

export default SearchBar;
