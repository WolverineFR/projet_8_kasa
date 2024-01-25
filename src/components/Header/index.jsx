import React from "react";
import logo from "../../assets/logo_kasa_210.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <img className="Logo" src={logo} alt="Logo Kasa"></img>
      <div className="NavigationBox">
        <NavLink to="/" className="Accueil">
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className="Apropos" href="">
          A Propos
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
