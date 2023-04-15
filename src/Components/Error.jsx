import React from "react";
import styled from "styled-components";
import ErrorImage from "../Assests/images/404.svg";
import SecondaryButton from "./SecondaryButton";

const Error = () => {
  return (
    <Container>
      <Image src={ErrorImage} alt="" />
      <Content>
        <Heading>Oops!</Heading>
        <Content>
 <Text>
          We are sorry, but we can't find the page you are looking for.
        </Text>
        <SecondaryButton> 
            Back to home
        </SecondaryButton>
        </Content>
       
      </Content>
    </Container>
  );
};

export default Error;

const Container = styled.section`
  display: flex;
  align-items:center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4em;
  height: 100%;
  padding: 4em;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4em;
`;

const Heading = styled.p`
  font-family: "Comicy";
  font-style: normal;
  font-weight: 400;
  font-size: 90px;
  line-height: 110px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #000000;
`;


const Text = styled.p`
  font-family: "Comic Sans MS";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 120%;
  max-width: 685px;
`;


const Image = styled.img``;
