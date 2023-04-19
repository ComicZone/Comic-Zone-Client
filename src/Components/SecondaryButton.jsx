import React from "react";
import styled from "styled-components";

function SecondaryButton({ children }) {
  return (
    <Button>
      <Text>{children}</Text>
    </Button>
  );
}

export default SecondaryButton;

const Button = styled.a`
  text-align: center;
  color: #faf8f8;
  min-width: 398px;
  max-height: 57px;
  background: #ffc700;
  backdrop-filter: blur(10.8311px);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  transition: 0.5s ease;
  :hover{
    background: black;
    border: 1px solid black;

    p{
        color: #ffc700;
    }
  }
`;

const Text = styled.p`
  font-family: "Comic Sans MS";
  font-style: normal;
  font-weight: 700;
  font-size: MIN(24px, 4vw);
  padding: 12px 6em;
  color: black;
`;
