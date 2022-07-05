import React from "react";
import logo from "../assets/images/logo_alone.png";

function Fund() {
  return (
    <main className="flex flex-col w-screen px-8 pt-8 pb-8 tracking-wide">
      <img src={logo} alt="logo" className="max-w-[4rem] mr-2 mb-8" />
      <p className=" text-2xl text-[#4F4E47]">Votre cagnotte</p>
      <p className=" text-m text-[#4F4E47] mb-8"> </p>

      <picture className="self-center justify-self-center mt-24 mb-16">
        <img
          src="https://chart.googleapis.com/chart?cht=qr&chl=Shop%20Around%20Me&chs=180x180&choe=UTF-8&chld=L|2%27%20rel=%27nofollow"
          alt="qr code"
        />
      </picture>
      <p className="text-4xl self-center">52,56€</p>
    </main>
  );
}

export default Fund;
