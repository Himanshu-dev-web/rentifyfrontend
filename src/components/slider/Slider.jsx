import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/arrow.png" alt="Previous" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="Current" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="/arrow.png" className="right" alt="Next" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="Thumbnail" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1, 4).map((image, index) => (
          <div className="smallImageContainer" key={index}>
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setImageIndex(index + 1)}
            />
            {index === 2 && images.length > 4 && (
              <div className="moreImagesOverlay" onClick={() => setImageIndex(index + 1)}>
               +{images.length - 4}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
