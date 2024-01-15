import React from "react";
import logoWhite from "../../assets/logo_kasa_white.png";

function Footer() {
  return (
    <div className="Footer">
      <img className="LogoSmall" src={logoWhite} alt="Logo Kasa"></img>
      <p className="Rights">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
