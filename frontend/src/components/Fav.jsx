import logo from "../assets/images/logo_alone.png";

export default function Fav() {
  const allFav = [
    { img: logo, name: "Magasin Fossier" },
    { img: logo, name: "Au temps des cerises" },
    { img: logo, name: "Le clos simon" },
    { img: logo, name: "La petite malle" },
    { img: logo, name: "Pas à pas" },
    { img: logo, name: "Petit colin" },
    { img: logo, name: "Brice" },
    { img: logo, name: "Etam" },
    { img: logo, name: "Camaïeu" },
  ];

  return (
    <section className="grid grid-cols-3 gap-5 gap-y-10 mx-6 mb-24">
      <h1 className="text-center text-4xl mt-10 col-start-1 col-end-4">
        Favoris
      </h1>
      {allFav.map((favorite) => (
        <figure
          key={favorite.name}
          className="flex flex-col items-center gap-1"
        >
          <img src={favorite.img} alt="favori" />
          <figcaption className="text-center">{favorite.name}</figcaption>
        </figure>
      ))}
    </section>
  );
}
