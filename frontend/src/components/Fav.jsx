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
    <section className="flex flex-col w-screen px-8 pt-8 pb-8 tracking-wide">
      <img src={logo} alt="logo" className="max-w-[4rem] mr-2 mb-8" />
      <p className=" text-2xl text-[#4F4E47]">Vos favoris</p>
      <p className=" text-m text-[#4F4E47] mb-8 leading-4">
        Enregistrez vos boutiques favorites et retrouvez-les rapidement.
      </p>
      <div className="flex flex-row flex-wrap gap-x-4 gap-y-4 justify-center">
        {allFav.map((favorite) => (
          <figure className="flex flex-col items-center max-w-[30%]">
            <img src={favorite.img} alt="favoris" />
            <figcaption className="text-center">{favorite.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
