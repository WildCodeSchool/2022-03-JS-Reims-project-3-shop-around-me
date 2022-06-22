import logo from "../assets/images/logo.png";

export default function Fav() {
  const allFav = [
    { img: logo, title: "Fav 1" },
    { img: logo, title: "Fav 2" },
    { img: logo, title: "Fav 3" },
    { img: logo, title: "Fav 4" },
    { img: logo, title: "Fav 5" },
    { img: logo, title: "Fav 6" },
    { img: logo, title: "Fav 7" },
    { img: logo, title: "Fav 8" },
    { img: logo, title: "Fav 9" },
  ];

  return (
    <>
      <h1 className="text-center">Favoris</h1>
      <div className="grid grid-cols-3 gap-5">
        {allFav.map((img) => (
          <div className="">
            <img src={img} alt="favori" />
          </div>
        ))}
      </div>
    </>
  );
}
