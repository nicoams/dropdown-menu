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
              alt="Man on feet holding a laptop with his left hand while typing with his right one."
            ></source>
            <img
              src={process.env.PUBLIC_URL + "/images/image-hero-mobile.png"}
              alt="Man on feet holding a laptop with his left hand while typing with his right one."
            />
          </picture>
        </div>

        <div className="hero-text">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button>Learn more</button>
        </div>
      </section>

      <footer>
        <img
          src={process.env.PUBLIC_URL + "/images/client-databiz.svg"}
          alt="databiz logo"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/client-audiophile.svg"}
          alt="audiophile logo"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/client-meet.svg"}
          alt="meet logo"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/client-maker.svg"}
          alt="maker logo"
        />
      </footer>
    </div>
  );
}

export default App;
