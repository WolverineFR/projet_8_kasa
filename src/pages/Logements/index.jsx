import React from "react";
import Carrousel from "../../components/Carrousel/";
import { Navigate, useParams } from "react-router-dom";
import logementData from "../../data/logements.json";
import Accordion from "../../components/Accordion/";

function Logements() {
  const idPage = useParams().id;
  const currentLogement = logementData.find(
    (logement) => logement.id === idPage
  );

  if (!currentLogement) {
    return <Navigate to="error" />;
  }

  // affichage des etoiles
  const StarRate = parseInt(currentLogement.rating);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass =
        i <= StarRate
          ? "redStar fa-solid fa-star"
          : "greyStar fa-solid fa-star";
      stars.push(<i key={i} className={starClass}></i>);
    }
    return stars;
  };

  const equipements = currentLogement.equipments.map((equipment, i) => (
    <div key={`equipement${i}`}>{equipment}</div>
  ));

  return (
    <main>
      <Carrousel images={currentLogement.pictures} />
      <div className="LogementInfoBox">
        {currentLogement && (
          <div className="TitleAndLocation">
            <h1 className="LogementTitle" key={currentLogement.id}>
              {currentLogement.title}
            </h1>
            <h2 className="Location">{currentLogement.location}</h2>
            <div className="TagsBox">
              {currentLogement.tags.map((tags, index) => (
                <p className="Tag" key={index}>
                  {tags}
                </p>
              ))}
            </div>
          </div>
        )}
        <div className="HostAndRateBox">
          <div className="HostProfile">
            <p className="HostName">{currentLogement.host.name}</p>
            <img
              className="HostPic"
              src={currentLogement.host.picture}
              alt="Photo de profil"
            ></img>
          </div>
          <div className="Rates">{renderStars()}</div>
        </div>
      </div>
      <div className="accordionBox">
        <div className="collapseBox W50">
          <Accordion titre="Description" texte={currentLogement.description} />
        </div>
        <div className="collapseBox W50">
          <Accordion titre="Equipement" texte={equipements} />
        </div>
      </div>
    </main>
  );
}

export default Logements;
