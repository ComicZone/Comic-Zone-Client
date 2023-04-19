import React from "react";
import styled from "styled-components";
import { usePaystackPayment } from "react-paystack";
import { converDollarToNaira } from "../Utils/converDollarToNaira";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../Context/cart_context";

const Currency = {
  naira: "NGN",
  dollar: "USD",
};

// you can call this function anything

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

const CheckoutButton = ({
  amount,
  classname,
  isDisabled,
  setPaymentStatus,
}) => {
  const { clearCart } = useCartContext();
  const navigate = useNavigate();

  const onSuccess = (reference) => {
    clearCart();

    setPaymentStatus("success");
    navigate("/profile");
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);

    // send transaction reference to backend
  };
  const config = React.useMemo(() => {
    return {
      reference: new Date().getTime().toString(),
      email: "example@example.com",
      currency: Currency.naira,
      amount: converDollarToNaira(amount) * 100,
      publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
    };
  }, [amount]);

  React.useEffect(
    () => console.log("KEY::: ", process.env.REACT_APP_PAYSTACK_PUBLIC_KEY),
    []
  );
  const initializePayment = usePaystackPayment(config);
  return (
    <Wrapper>
      <Button
        disabled={isDisabled}
        className={classname}
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
  width: MIN(440.51px, 80%);
  border-radius: 38.1677px;
  padding: 6px 18px;
  max-height: 85px;
  margin: auto;
  margin-top: 1em;
  @media screen and (max-width: 768px) {
    width: MIN(300px, 100%);
  }
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
