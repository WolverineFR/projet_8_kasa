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
      <div className="collapseBox">
        {dataApropos.map((item) => {
          return (
            <Accordion titre={item.titre} texte={item.texte} key={item.id} />
          );
        })}
      </div>
    </main>
  );
}

export default Apropos;
