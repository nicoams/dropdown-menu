import React, { useState } from "react";

import Menu from "./Menu.js";

import "../styles/Header.scss";

const Header = () => {
  const [isActive, setIsActive] = useState({});

  const handleClick = (name) => {
    setIsActive((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <header>
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="logo"></img>
      </div>
      <div className="menu-button">
        <button
          id="open-menu"
          name="menu"
          onClick={() => handleClick("menu")}
        >
          <img src={process.env.PUBLIC_URL + "/images/icon-menu.svg"} alt="menu"></img>
        </button>
      </div>
      <Menu
        isActive={isActive}
        setIsActive={setIsActive}
        handleClick={handleClick}
      />
    </header>
  );
};

export default Header;
