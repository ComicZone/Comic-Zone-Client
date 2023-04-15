import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-ection">
      <div className="hero-container">
        <div className="individual-cards">
          <Link to="/preview">Click to go to preview page</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
