import React, { useState } from "react";
import PropTypes from "prop-types";

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
      {images.length > 1 && (
        <>
          <p className="indexPicture">{`${selected + 1}/${images.length}`}</p>
          <i
            className="Arrow_Left fa-solid fa-chevron-left"
            onClick={prevSlide}
          ></i>
          <i
            className="Arrow_Right fa-solid fa-chevron-right"
            onClick={nextSlide}
          ></i>
        </>
      )}
    </div>
  );
};

Carrousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrousel;
