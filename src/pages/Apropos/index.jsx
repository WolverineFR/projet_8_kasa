import React from "react";
import Background from "../../assets/background_lac.png";
import Accordion from "../../components/Accordion/";

function Apropos() {
  return (
    <main>
      <div className="sloganBox">
        <img className="imgWallpaper" alt="Montagne" src={Background}></img>
      </div>

      <Accordion item={data} />
    </main>
  );
}

const data = [
  {
    titre: "Fiabilité",
    texte:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    titre: "Respect",
    texte:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    titre: "Service",
    texte:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    titre: "Sécurité",
    texte:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

export default Apropos;
