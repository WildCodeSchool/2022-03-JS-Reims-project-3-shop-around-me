import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../contexts/AuthContext";
import logo from "../assets/images/logo_alone.png";

function Fund() {
  const { loginData, refresh } = useAuthContext();
  const { user } = loginData;

  return (
    <main className="flex flex-col w-screen px-8 pt-8 pb-8 tracking-wide">
      <img src={logo} alt="logo" className="max-w-[4rem] mr-2 mb-8" />
      <p className=" text-2xl text-[#4F4E47]">Votre cagnotte</p>
      <p className=" text-m text-[#4F4E47] mb-8 leading-4">
        Présentez votre QR code à votre commerçant participant pour cumuler ou
        dépenser votre cashback.
      </p>

      <picture className="self-center justify-self-center mt-24 mb-16">
        <img
          src="https://chart.googleapis.com/chart?cht=qr&chl=Shop%20Around%20Me&chs=180x180&choe=UTF-8&chld=L|2%27%20rel=%27nofollow"
          alt="qr code"
        />
      </picture>
      <div className="amount-container text-center">
        <p className="text-4xl self-center text-[#4F4E47]">
          {user?.fund?.toFixed(2)} €
        </p>
        <button type="button" onClick={refresh}>
          <FontAwesomeIcon
            icon={faArrowsRotate}
            className="w-[48px] h-[48px] m-8 text-[#4F4E47]"
          />
        </button>
      </div>
    </main>
  );
}

export default Fund;
