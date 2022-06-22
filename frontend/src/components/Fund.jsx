import React from "react";

function Fund() {
  return (
    <section className="h-screen w-screen grid grid-cols-1 grid-rows-3 items-center justify-center text-center">
      <h1 className="row-start-1 text-5xl">Ma cagnotte</h1>
      <figure className="row-start-2 flex items-center justify-center">
        <img
          src="https://chart.googleapis.com/chart?cht=qr&chl=Shop%20Around%20Me&chs=180x180&choe=UTF-8&chld=L|2%27%20rel=%27nofollow"
          alt="qr code"
          className="min-w-[40vh]"
        />
      </figure>
      <figcaption className="row-start-3 text-5xl">50 euros</figcaption>
    </section>
  );
}

export default Fund;
