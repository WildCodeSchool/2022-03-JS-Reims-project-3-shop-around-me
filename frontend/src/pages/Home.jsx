export default function Home() {
  return (
    <>
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          name="search"
          placeholder="Recherche ..."
        />
      </label>
      <button type="button">🔎</button>
    </>
  );
}
