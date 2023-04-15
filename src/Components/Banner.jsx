import React from "react";
import "../Stylesheets/Banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: false,
    autoplay: true,
    autoplayspeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="banner-container">
      <Slider {...settings}>
        <div className="individual-slides">
          <h2 className="slide-text">Romance</h2>
        </div>
        <div className="individual-slides">
          <h2 className="slide-text">Adult</h2>
        </div>
        <div className="individual-slides">
          <h2 className="slide-text">Fiction</h2>
        </div>
        <div className="individual-slides">
          <h2 className="slide-text">Sci-Fi</h2>
        </div>
        <div className="individual-slides">
          <h2 className="slide-text">Action</h2>
        </div>
        <div className="individual-slides">
          <h2 className="slide-text">Lifestyle</h2>
        </div>
        <div className="individual-slides">
          <h2 className="slide-text">Imagination</h2>
        </div>
        <div className="individual-slides">
          <h2 className="slide-text">Planet</h2>
        </div>
      </Slider>
    </section>
  );
};

export default Banner;
