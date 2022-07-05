import logo from "../assets/images/logo.png";

export default function VerticalLogo() {
  return (
    <picture className="m-8 flex justify-center">
      <img src={logo} alt="logo" className="max-w-[70%]" />
    </picture>
  );
}
