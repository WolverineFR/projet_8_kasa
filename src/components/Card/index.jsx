import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardHome = ({ logement }) => {
  return (
    <Link
      to={`logement/${logement.id}`}
      className="Card"
      href=""
      key={logement.id}
    >
      <img className="cardImg" alt={logement.title} src={logement.cover}></img>
      <p className="cardTitle">{logement.title}</p>
    </Link>
  );
};

CardHome.propTypes = {
  logement: PropTypes.object.isRequired,
};

export default CardHome;
