import React, { useState } from "react";
import Background from "../../assets/background_lac.png";
import ArrowUp from "../../assets/arrow_up.svg";

function Apropos() {
  const [selected, setSelected] = useState(null);
  const [rotate, setRotate] = useState(false);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
      setRotate(false);
    } else {
      setSelected(i);
      setRotate(true);
    }
  };

  return (
    <main>
      <div className="sloganBox">
        <img className="imgWallpaper" alt="Montagne" src={Background}></img>
      </div>

      <div className="collapseBox">
        {data.map((item, i) => (
          <div className="Collapse" onClick={() => toggle(i)} key={item.id}>
            <p className="Collapse__Title">{item.titre}</p>
            <img
              className={`Collapse__Svg${
                rotate && selected === i ? " rotate" : ""
              }`}
              src={ArrowUp}
              alt="Arrow"
            />
            <div className={selected === i ? "TexteBox Show" : "TexteBox"}>
              <p className="Textess">{item.texte}</p>
            </div>
          </div>
        ))}
      </div>
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

{
  /* <div className="sloganBox">
        <img className="imgWallpaper" alt="Montagne" src={Background}></img>
      </div>
      <div className="collapseBox">
        <div className="Collapse">
          <p className="Collapse__Title" onClick={toggle}>
            Fiabilité
          </p>
          <img
            className="Collapse__Svg"
            src={ArrowUp}
            alt="Arrow"
            onClick={toggle}
          />
          <div className={`TexteBox ${selected ? "Show" : ""}`}>
            <p className="Textess">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              eaque temporibus eos exercitationem voluptate nam. Doloremque
              eaque ipsam optio, adipisci rerum beatae eveniet soluta, sapiente,
              ea veniam neque! Laborum, id!
            </p>
          </div>
        </div>
      </div> */
}

export default Apropos;
