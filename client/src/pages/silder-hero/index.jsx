import React from "react";
import "./index.scss";
import sliderBackground from "../../assets/image/slider_background.jpg";
import Slider from "react-slick";
const SliderHero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="slider">
        <div className="bckIMg">
          <img src={sliderBackground} alt="" />
          <div className="content">
            <div className="container">
              <h1>
                Get your <span>Education</span> today!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderHero;
