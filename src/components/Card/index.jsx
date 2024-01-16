import React from "react";
import PropTypes from "prop-types";

const CardHome = ({ logement }) => {
  return (
    <a className="Card" href="" key={logement.id}>
      <img className="cardImg" alt={logement.title} src={logement.cover}></img>
      <p className="cardTitle">{logement.title}</p>
    </a>
  );
};

CardHome.propTypes = {
  logement: PropTypes.object.isRequired,
};

export default CardHome;
