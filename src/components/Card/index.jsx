import React from "react";
import PropTypes from "prop-types";

const CardHome = ({ logement }) => {
  return (
    <a className="Card" href={`./Logements/${logement.id}`}>
      <img className="cardImg" alt={logement.title} src={logement.cover}></img>
      <p className="cardTitle">{logement.title}</p>
    </a>
  );
};

CardHome.propTypes = {
  logement: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
};
export default CardHome;
