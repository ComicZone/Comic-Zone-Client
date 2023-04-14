import React from "react";
import Banner from "../Components/Banner";
// import CheckoutButton from "../Components/CheckoutButton";
import Comics from "../Components/Comics";

const Homepage = () => {
  return (
    <main>
      <Banner />
      {/* <CheckoutButton amount={'5.99'}/> */}
      <Comics />
    </main>
  );
};

export default Homepage;
