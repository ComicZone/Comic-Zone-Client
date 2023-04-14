import React from "react";
import Banner from "../Components/Banner";
import Comics from "../Components/Comics";
import Hero from "../Components/Hero";
// import CheckoutButton from "../Components/CheckoutButton";

const Homepage = () => {
  return (
    <main>
      <Hero/>
      <Banner />
      <Comics />
      {/* <CheckoutButton amount={'5.99'}/> */}
    </main>
  );
};

export default Homepage;
