import React, { useEffect } from "react";
import {
  BTNText,
  Bottom,
  Button,
  Check,
  Container,
  Exit,
  Heading,
  Overlay,
  Text,
  Top,
} from "./PaymentPopup.styled";
import { useNavigate } from "react-router-dom";

const PaymentPopup = ({ status, close }) => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    close();
    navigate('/profile');
  }
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  },[]);
  return (
    <>
      <Overlay />
      <Exit size={24} color="white" onClick={close} />
      <Container>
        <Top>
          <Check size={162} color={"white"} />
        </Top>
        <Bottom>
          <Heading>Awesome!</Heading>
          <Text>
            Your payment has been confirmed. <br /> Thank you!
          </Text>
          <Button onClick={handleNavigation}>
            <BTNText>View books</BTNText>
          </Button>
        </Bottom>
      </Container>
    </>
  );
};

export default PaymentPopup;
