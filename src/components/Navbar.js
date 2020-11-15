import React from "react";
import logo from "./assets/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="nav">
      <header>
        <div className="nav__imageContainer">
          <Link to="/site">
            <img src={logo} alt="site-logo" className="nav__siteLogo" />
          </Link>

          <h4>
            FEDERAL MINISTRY OF HUMANITARIAN AFFAIRS, DISASTER MANAGEMENT AND
            SOCIAL DEVELOPMENT
          </h4>
        </div>

        <ul className="nav__links">
          <li className={`nav__list `}>
            <NavLink
              to="/site"
              activeClassName={location.pathname === "/site" ? "isActive" : ""}
            >
              Home
            </NavLink>
          </li>
          <li className={`nav__list`}>
            <NavLink
              to="/site/programmes"
              activeClassName={
                location.pathname === "/site/programmes" ? "isActive" : ""
              }
            >
              Programmes
            </NavLink>
          </li>
        </ul>
      </header>
    </nav>
  );
};

export default Navbar;

/*  
 in order to determine the active link
 i have imported useLocation from react-router-dom , called it and stored its return value in 
a variable called location

the NavLink component imported from react-router-dom provides an activeClassName prop whose
value I have set based on the pathname the page is currently on.

the isActive class is defined in the css

when the activeClassName is isActive, we get the current link, otherwise the link has no border-bottom-color


=======

const location = useLocation();
console.log(location); // to see the properties available


<NavLink
    to="/pathToVisit"
    activeClassName={ location.pathname === "/pathToVisit" ? "isActive" : ""   } >
        PageLinkName
</NavLink>
           
           




*/
