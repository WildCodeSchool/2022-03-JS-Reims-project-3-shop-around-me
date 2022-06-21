function Navbar() {
  const navBarMenu = ["Acceuil", "Boutique", "Cagnotte", "Favoris", "Profile"];
  return (
    <div className="fixed h-[8vh] w-screen bottom-0 bg-[#4F4E47]">
      <ul className="flex items-center justify-center h-[8vh]">
        {navBarMenu.map((menu) => (
          <li key={menu} className="mr-4 text-white text-lg">
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
