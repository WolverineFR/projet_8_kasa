import React from "react";
import logo from "../../assets/logo_kasa_210.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <img className="Logo" src={logo} alt="Logo Kasa"></img>
      <div className="NavigationBox">
        <Link to="/" className="Accueil">
          Accueil
        </Link>
        <Link to="/a-propos" className="Apropos" href="">
          A Propos
        </Link>
      </div>
    </div>
  );
}

export default Header;
