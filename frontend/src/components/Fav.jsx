import logo from "../assets/images/logo_alone.png";

export default function Fav() {
  const allFav = [
    { img: logo, name: "Favori 1" },
    { img: logo, name: "Favori 2" },
    { img: logo, name: "Favori 3" },
    { img: logo, name: "Favori 4" },
    { img: logo, name: "Favori 5" },
    { img: logo, name: "Favori 6" },
    { img: logo, name: "Favori 7" },
    { img: logo, name: "Favori 8" },
    { img: logo, name: "Favori 9" },
  ];

  return (
    <section className="grid grid-cols-3 gap-5 gap-y-10 mx-6 mb-24">
      <h1 className="text-center text-3xl my-16 col-start-1 col-end-4">
        Favoris
      </h1>
      {allFav.map((favorite) => (
        <figure className="flex flex-col items-center gap-1">
          <img src={favorite.img} alt="favori" />
          <figcaption>{favorite.name}</figcaption>
        </figure>
      ))}
    </section>
  );
}
