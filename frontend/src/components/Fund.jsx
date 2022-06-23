import React from "react";

function Fund() {
  return (
    <section className="container text-center min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl m-20">Ma cagnotte</h1>
      <figure className="flex flex-grow flex-col">
        <div className="container">
          <img
            src="https://chart.googleapis.com/chart?cht=qr&chl=Shop%20Around%20Me&chs=180x180&choe=UTF-8&chld=L|2%27%20rel=%27nofollow"
            alt="qr code"
            className="min-w-full my-0 mx-auto"
          />
        </div>
        <figcaption className="text-4xl m-16">50 euros</figcaption>
      </figure>
    </section>
  );
}

export default Fund;
