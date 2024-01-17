import React from "react";
import Background from "../../assets/background_lac.png";
import ArrowUp from "../../assets/arrow_up.svg";

function Apropos() {
  return (
    <main>
      <div className="sloganBox">
        <img className="imgWallpaper" alt="Montagne" src={Background}></img>
      </div>
      <div className="collapseBox">
        <div className="Collapse">
          <p className="Collapse__Title">Fiabilité</p>
          <img className="Collapse__Svg" src={ArrowUp} alt="Arrow" />
          <div className="TexteBox">
            <p className="TexteBox__Texte">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              eaque temporibus eos exercitationem voluptate nam. Doloremque
              eaque ipsam optio, adipisci rerum beatae eveniet soluta, sapiente,
              ea veniam neque! Laborum, id!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Apropos;
