import logo from "../assets/images/logo.png";

export default function RetailerArea() {
  return (
    <div className="grid place-items-center">
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="max-w-xs m-4" />
      </div>
    </div>
  );
}
