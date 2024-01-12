import React from "react";
import logo from "../../assets/logo_kasa_210.png";

function Header() {
  return (
    <div className="Header">
      <img className="Logo" src={logo} alt="Logo Kasa"></img>
      <div className="NavigationBox">
        <a className="Accueil" href="">
          Accueil
        </a>
        <a className="Apropos" href="">
          A Propos
        </a>
      </div>
    </div>
  );
}

export default Header;
