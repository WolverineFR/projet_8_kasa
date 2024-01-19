import React from "react";
import PropTypes from "prop-types";
import ArrowLeft from "../../assets/arrow_left.svg";
import ArrowRight from "../../assets/arrow_right.svg";

const Carrousel = ({ logement }) => {
  return (
    <div className="CarrouselBox">
      <img className="Arrow_Left" src={ArrowLeft} alt="Arrow"></img>
      <img className="Arrow_Right" src={ArrowRight} alt="Arrow"></img>
      <img className="CarrousselImg" src={logement.pictures} alt=""></img>
    </div>
  );
};

Carrousel.propTypes = {
  logement: PropTypes.object.isRequired,
};

export default Carrousel;
