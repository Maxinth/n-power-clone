import React, { useState } from "react";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [page, setPage] = useState("home");

  const toggleActiveClass = (currentPage) => {
    return page === currentPage ? "isActive" : "";
  };
  return (
    <nav className="nav">
      <header>
        <div className="nav__imageContainer">
          <Link onClick={() => setPage("home")} to="/site">
            <img src={logo} alt="site-logo" className="nav__siteLogo" />
          </Link>

          <h4>
            FEDERAL MINISTRY OF HUMANITARIAN AFFAIRS, DISASTER MANAGEMENT AND
            SOCIAL DEVELOPMENT
          </h4>
        </div>

        <ul className="nav__links">
          <li className={`nav__list ${toggleActiveClass("home")}`}>
            <Link onClick={() => setPage("home")} to="/site">
              Home
            </Link>
          </li>
          <li className={`nav__list ${toggleActiveClass("programmes")}`}>
            <Link onClick={() => setPage("programmes")} to="/site/programmes">
              Programmes
            </Link>
          </li>
        </ul>
      </header>
    </nav>
  );
};

export default Navbar;
