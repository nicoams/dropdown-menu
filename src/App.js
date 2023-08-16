import React from "react";

import Header from "./components/Header";

import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />

      <section className="hero">
        <div className="hero-img">
          <picture>
            <source
              media="(min-width:1000px)"
              srcSet={process.env.PUBLIC_URL + "/images/image-hero-desktop.png"}
            ></source>
            <img src="/images/image-hero-mobile.png" alt="" />
          </picture>
        </div>

        <div className="hero-text">
          <h1>
            Make remote work
          </h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button>Learn more</button>
        </div>
      </section>

      <footer>
        <img src="/images/client-databiz.svg" alt="" />
        <img src="/images/client-audiophile.svg" alt="" />
        <img src="/images/client-meet.svg" alt="" />
        <img src="/images/client-maker.svg" alt="" />
      </footer>
    </div>
  );
}

export default App;
