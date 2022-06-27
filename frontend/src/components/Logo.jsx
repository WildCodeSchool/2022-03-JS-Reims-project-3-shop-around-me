import logo from "../assets/images/logo_alone.png";
import text from "../assets/images/text_alone.png";

export default function Logo() {
  return (
    <div className="flex items-center m-4">
      <img src={logo} alt="logo" className="max-w-[4rem] mr-2" />
      <img src={text} alt="logo" className="max-w-[12rem] relative top-2" />
    </div>
  );
}
