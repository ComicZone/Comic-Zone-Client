import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Books from "./Books";
import Banner from './Banner'
import styled from "styled-components";

const Hero = () => {
  return (
    <Section>
      <Card/>
      <Books/>
      <Banner />
    </Section>

  );
};

export default Hero;

const Section = styled.section`
`
