import React from "react";
import styled from "styled-components";
import { usePaystackPayment } from "react-paystack";
import { converDollarToNaira } from "../Utils/converDollarToNaira";

const Currency = {
  naira: "NGN",
  dollar: "USD",
};

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

const CheckoutButton = ({ amount }) => {
  const config = {
    reference: new Date().getTime().toString(),
    email: "example@example.com",
    currency: Currency.naira,
    amount: converDollarToNaira(amount) * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
  };
  const initializePayment = usePaystackPayment(config);
  return (
    <Wrapper>
      <Button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Proceed to buy
      </Button>
    </Wrapper>
  );
};

export default CheckoutButton;

const Wrapper = styled.section`
  background: rgba(0, 19, 47, 0.44);
  backdrop-filter: blur(10.687px);
  width: MIN(440.51px, 50%);
  border-radius: 38.1677px;
  padding: 8px 16px;
`;

const Button = styled.button`
  font-family: "Comic Sans MS";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #e5f4ff;
  padding: 1;
  margin: 0;
  border: none;
  background: rgba(0, 3, 7, 0.75);
  backdrop-filter: blur(1%);
  border-radius: 33.5876px;
  width: MIN(415px, 100%);
  height: MIN(68px, 5em);
  position: relative;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.02);
  }
`;
