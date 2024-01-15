import React from "react";
import Background from "../../assets/background.png";
import CardHome from "../../components/Card/";
import logementsData from "../../data/logements.json";

function Home() {
  return (
    <main>
      <div className="sloganBox">
        <img className="imgWallpaper" alt="Montagne" src={Background}></img>
        <p className="Slogan">Chez vous, partout et ailleurs</p>
      </div>
      <div className="cardBox">
        {logementsData.map((logement) => {
          <CardHome key={logement.id} logement={logementsData} />;
        })}
      </div>
    </main>
  );
}

export default Home;
