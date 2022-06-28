import React from "react";

function Fund() {
  return (
    <main className="text-center min-h-[92vh] flex flex-col items-center justify-evenly">
      <h1 className="text-4xl">Ma cagnotte</h1>
      <picture className="flex-col">
        <img
          src="https://chart.googleapis.com/chart?cht=qr&chl=Shop%20Around%20Me&chs=180x180&choe=UTF-8&chld=L|2%27%20rel=%27nofollow"
          alt="qr code"
        />
      </picture>
      <p className="text-4xl">52,56€</p>
    </main>
  );
}

export default Fund;
