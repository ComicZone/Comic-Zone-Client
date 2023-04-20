import styled from "styled-components";
import { FiCheck } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

export const Overlay = styled.div`
  width: 1000vw;
  height: MAX(100%, 100vh);
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  z-index: 9;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: MIN(80%, 905px);
  height: fit-content;
  background: #ffffff;
  border-radius: 32px;
  z-index: 99;
  overflow: hidden;
`;

export const InnerContainers = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em;
  align-items: center;
`;

export const Top = styled(InnerContainers)`
  background: #ffc700;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Bottom = styled(InnerContainers)`
  height: 65%;
  gap: 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Heading = styled.h2`
  font-family: "Monument Extended";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  font-size: clamp(2rem, 64px, 5vw);
  text-align: center;
  letter-spacing: -0.01em;
  color: #34a853;
  mix-blend-mode: normal;
`;

export const Text = styled.p`
  font-family: "Comic Sans MS";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  font-size: clamp(1.25rem, 32px, 4vw);
  line-height: 120%;
  text-align: center;
  color: #4e5765;
  max-width: 683.53px;
`;

export const Check = styled(FiCheck)`
  filter: drop-shadow(-2px -10px 0px rgb(0, 0, 0, 0.1));
`;

export const Button = styled.a`
  text-align: center;
  color: #faf8f8;
  padding: 0.4em 0;
  width: 100%;
  max-width: 398px;
  max-height: 57px;
  background-color: #fb1a1a;
  backdrop-filter: blur(10.8311px);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  transition: 0.5s ease;
  margin: 1em auto;
  :hover {
    background: black;
    border: 1px solid black;

    p {
      /* color: #ffc700; */
    }
  }
`;

export const BTNText = styled.p`
  font-family: "Comic Sans MS";
  font-style: normal;
  font-weight: 700;
  font-size: 16.982px;
  line-height: 24px;
  text-align: center;
  color: #faf8f8;
`;

export const Exit = styled(AiOutlineClose)`
  position: absolute;
  top: 2em;
  right: 2em;
  z-index: 100;
  transition: 0.5s ease;

  :hover {
    cursor: pointer;
    transform: scale(1.08);
  }
`;
