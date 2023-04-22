import React from "react";
import { Link } from "react-router-dom";
import "../Stylesheets/Hero.css";
// import Card from "./Card";
// import Books from "./Books";
// import Banner from "./Banner";
// import styled from "styled-components";

const Hero = () => {
  return (
    <section className="hero-container">
      <h1 className="hero-lead-text">
        Heroes read <br /> about heroes
      </h1>
      <p className="hero-sub-text">
        Digital marketplace for all kind of comic books, easily find and read{" "}
        <br />
        your favorite comic hero's
      </p>

      <Link to="/" className="hero-button">
        View by Category
      </Link>
      {/* <div className="comic">
      <Link to="/" className="hero-button">
        View by Category
      </Link>
      </div> */}
    </section>
  );
};

export default Hero;

// const Section = styled.section``;
