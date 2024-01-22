import React, { useState } from "react";
import PropTypes from "prop-types";
import ArrowLeft from "../../assets/arrow_left.svg";
import ArrowRight from "../../assets/arrow_right.svg";

const Carrousel = ({ images }) => {
  const [selected, setSelected] = useState(0);

  const prevSlide = () => {
    setSelected((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setSelected((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="CarrouselBox">
      {images.length > 0 && (
        <img
          className="CarrousselImg"
          src={images[selected]}
          alt={`${selected + 1}`}
        />
      )}

      <p className="indexPicture">{`${selected + 1}/${images.length}`}</p>
      <img
        className="Arrow_Left"
        onClick={prevSlide}
        src={ArrowLeft}
        alt="Arrow Left"
      ></img>
      <img
        className="Arrow_Right"
        onClick={nextSlide}
        src={ArrowRight}
        alt="Arrow Right"
      ></img>
    </div>
  );
};

Carrousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrousel;
