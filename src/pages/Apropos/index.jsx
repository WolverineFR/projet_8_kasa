import React from "react";
import Background from "../../assets/background_lac.png";
import Accordion from "../../components/Accordion/";
import dataApropos from "../../data/dataApropos.json";

function Apropos() {
  return (
    <main>
      <div className="sloganBox">
        <img className="imgWallpaper" alt="Montagne" src={Background}></img>
      </div>
      <Accordion item={dataApropos} />
    </main>
  );
}

export default Apropos;
