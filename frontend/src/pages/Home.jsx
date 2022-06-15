import SearchBar from "../components/SearchBar";
import Map from "../components/Map";

export default function Home() {
  return (
    <>
      <SearchBar />
      <div className="flex justify-center m-4">
        <Map />
      </div>
    </>
  );
}
