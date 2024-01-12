import React from "react";
import logo from "../../assets/logo_kasa_145.png";

function Footer() {
  return (
    <div className="Footer">
      <img className="LogoSmall" src={logo} alt="Logo Kasa"></img>
      <p className="Rights">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
