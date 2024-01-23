import React from "react";
import Carrousel from "../../components/Carrousel/";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import logementData from "../../data/logements.json";
import Accordion from "../../components/Accordion/";

function Logements() {
  const idPage = useParams().id;
  const currentLogement = logementData.find(
    (logement) => logement.id === idPage
  );

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
          <div className="Rates"></div>
        </div>
      </div>
      <div className="accordionBox">
        <Accordion items={currentLogement.description} />
        <Accordion items={currentLogement.equipement} />
      </div>
    </main>
  );
}

Logements.propTypes = {
  logement: PropTypes.object.isRequired,
};

export default Logements;
