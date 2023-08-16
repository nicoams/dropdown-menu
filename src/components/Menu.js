import React from "react";

import "../styles/Menu.scss";

const Menu = ({ isActive, setIsActive, handleClick }) => {
  //const [isActive, setIsActive] = useState({});

  let featuresIconPath;
  if (!isActive["features"]) {
    featuresIconPath = "/images/icon-arrow-down.svg";
  } else {
    featuresIconPath = "/images/icon-arrow-up.svg";
  }

  let companyIconPath;
  if (!isActive["company"]) {
    companyIconPath = "/images/icon-arrow-down.svg";
  } else {
    companyIconPath = "/images/icon-arrow-up.svg";
  }

  return (
    <div className={`menu-container ${isActive["menu"] ? "active" : ""}`}>
      <nav>
        <div className="close-menu-button">
          <button
            id="close-menu"
            name="menu"
            onClick={() => handleClick("menu")}
          >
            <img
              src="/images/icon-close-menu.svg"
              alt="close menu"
            ></img>
          </button>
        </div>
        <div className="menu-options">
          <div className="features">
            <button
              id="features"
              name="features"
              onClick={() => handleClick("features")}
            >
              <p>Features</p>
              <img src={featuresIconPath} alt=""></img>
            </button>
            <div
              className={`inner-options ${
                isActive["features"] ? "active" : ""
              }`}
            >
              <button>
                <img src="/images/icon-todo.svg" alt=""></img>
                <p>Todo List</p>
              </button>
              <button>
                <img src="/images/icon-calendar.svg" alt=""></img>
                <p>Calendar</p>
              </button>
              <button>
                <img src="/images/icon-reminders.svg" alt=""></img>
                <p>Reminders</p>
              </button>
              <button>
                <img src="/images/icon-planning.svg" alt=""></img>
                <p>Planning</p>
              </button>
            </div>
          </div>
          <div className="company">
            <button
              id="company"
              name="company"
              onClick={() => handleClick("company")}
            >
              <p>Company</p>
              <img src={companyIconPath} alt=""></img>
            </button>
            <div
              className={`inner-options ${isActive["company"] ? "active" : ""}`}
            >
              <button>History</button>
              <button>Our Team</button>
              <button>Blog</button>
            </div>
          </div>
          <div className="carrers">
            <button>
              <p>Carrers</p>
            </button>
          </div>
          <div className="about">
            <button>
              <p>About</p>
            </button>
          </div>
        </div>
        <div className="profile-options">
          <button id="login">Login</button>
          <button id="register">Register</button>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
