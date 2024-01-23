import React, { useState } from "react";
import ArrowUp from "../../assets/arrow_up.svg";
import PropTypes from "prop-types";

const Accordion = ({ titre, texte }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="Collapse" onClick={() => toggle()}>
      <p className="Collapse__Title">{titre}</p>
      <img
        className={`Collapse__Svg${open ? " rotate" : ""}`}
        src={ArrowUp}
        alt="Arrow"
      />
      <div className={open ? "TexteBox Show" : "TexteBox"}>
        <div className="TextesContent">{texte}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  titre: PropTypes.string.isRequired,
  texte: PropTypes.string.isRequired,
};

export default Accordion;
