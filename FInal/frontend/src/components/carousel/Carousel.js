import React, { useEffect, useState } from "react";
import SliderContent from "./Carouselcontent";
import Arrows from "./Arrows";
import sliderImage from "./Carouselimage";
import "./Carousel.css";

const len = sliderImage.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container" style={{ marginTop: "5rem", width: "83%" }} id="deals">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() =>setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
        nextSlide={() =>setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
      />
    </div>
  );
}

export default Slider;