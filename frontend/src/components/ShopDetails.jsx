import logo from "../assets/images/logo.png";

export default function ShopDetails() {
  const shopExemple = {
    name: "Magasin Fossier",
    address: "25 Cr Jean-Baptiste Langlet, 51100 Reims",
    opening_hours: {
      lundi: "14:00-19:00",
      mardi: "14:00-19:00",
      mercredi: "14:00-19:00",
      jeudi: "14:00-19:00",
      vendredi: "14:00-19:00",
      samedi: "14:00-19:00",
      dimanche: "14:00-19:00",
    },
    website: "http://www.fossier.fr/",
    fb_page: "https://www.facebook.com/biscuitsfossier",
    insta_page: "https://www.instagram.com/biscuitsfossier/",
    phone: "03 26 47 59 84",
  };

  return (
    <>
      <h1>{shopExemple.name}</h1>
      <img
        src={logo}
        alt="illu boutique"
        className="border-2 border-black my-5"
      />
    </>
  );
}
