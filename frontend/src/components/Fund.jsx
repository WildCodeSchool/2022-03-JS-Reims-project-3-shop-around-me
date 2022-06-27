import React from "react";

function Fund() {
  return (
    <main className="text-center h-96 flex flex-col items-center justify-end">
      <h1 className="text-4xl">Ma cagnotte</h1>
      <figure className="flex-col">
        <img
          src="https://chart.googleapis.com/chart?cht=qr&chl=Shop%20Around%20Me&chs=180x180&choe=UTF-8&chld=L|2%27%20rel=%27nofollow"
          alt="qr code"
        />
        <figcaption className="text-4xl">50 euros</figcaption>
      </figure>
    </main>
  );
}

export default Fund;
