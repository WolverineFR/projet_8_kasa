import React from "react";
import Background from "../../assets/background.png";

function Home() {
  return (
    <main>
      <div className="sloganBox">
        <img className="imgWallpaper" alt="Montagne" src={Background}></img>
        <p className="Slogan">Chez vous, partout et ailleurs</p>
      </div>
      <div className="cardBox">
        <a className="Card" src="">
          <img className="cardImg" alt="" src=""></img>
          <p className="cardTitle">Titre de la location</p>
        </a>
        <a className="Card" src="">
          <img className="cardImg" alt="" src=""></img>
          <p className="cardTitle"></p>
        </a>
        <a className="Card" src="">
          <img className="cardImg" alt="" src=""></img>
          <p className="cardTitle"></p>
        </a>
        <a className="Card" src="">
          <img className="cardImg" alt="" src=""></img>
          <p className="cardTitle"></p>
        </a>
        <a className="Card" src="">
          <img className="cardImg" alt="" src=""></img>
          <p className="cardTitle"></p>
        </a>
        <a className="Card" src="">
          <img className="cardImg" alt="" src=""></img>
          <p className="cardTitle"></p>
        </a>
      </div>
    </main>
  );
}

export default Home;
