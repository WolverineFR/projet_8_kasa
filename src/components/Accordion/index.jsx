import React, { useState } from "react";
import ArrowUp from "../../assets/arrow_up.svg";
import PropTypes from "prop-types";

const Accordion = ({ item }) => {
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
    <div className="collapseBox">
      {item.map((item, i) => (
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
  );
};

Accordion.propTypes = {
  item: PropTypes.array.isRequired,
};

export default Accordion;
