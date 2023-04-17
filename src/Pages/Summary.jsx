import React, { useMemo } from "react";

import SummaryCard from "../Components/SummaryPage/SummaryCard";
import { FaArrowRight } from "react-icons/fa";
import "../Stylesheets/summary.css";
import CheckoutButton from "../Components/CheckoutButton";
import { useStoreContext } from "../Context/store_context";
import { useParams } from "react-router-dom";
import { useCartContext } from "../Context/cart_context";

const Summary = () => {
  const { store } = useStoreContext();
  const { cart } = useCartContext();

  const cartItems = useMemo(
    () =>
      cart.map((id, index) => {
        return store.filter((comic) => comic._id === id)[0];
      }),
    [cart, store]
  );

  const cartTotal = useMemo(
    () =>
      cartItems
        .map((v) => (!v ? 0 : Number(v.price.replace("$", ""))))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0),
    [cartItems]
  );

  return (
    <>
      {/* <span>Home / preview /Cart </span> */}
      <div className="summary-cont">
        <div className="summary-prog">
          <ul>
            <li>Cart </li>
            <li>Order Summary </li>
            <li>Payment Details </li>
          </ul>

          <div className="underline">
            <div className="linee"></div>
          </div>

          <SummaryCard cartItems={cartItems} />
        </div>
        <div className="order-summary">
          <div className="summary__order__cont">
            <h3 className="summary__head">Order Summary</h3>
            <hr />
            <h3 className="apply">Apply Coupon </h3>
            <form
              action="#"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input type="text" placeholder="Enter coupoun code" />
              <button>
                <FaArrowRight className="icon" />
              </button>
            </form>
            <hr />

            <div className="cart__summary">
              <h3>Cart Subtotal </h3>
              <p>Price {`$ ${cartTotal}`}</p>
            </div>
            <div className="vat__cont">
              <h3>VAT </h3>
              <p>
                Price {`$ ${0} (`} <span>free</span>
                {`)`}
              </p>
            </div>

            <hr />

            <div className="total__checkout">
              <h5>Total</h5>
              <p>{`$ ${cartTotal}`}</p>
            </div>

            <CheckoutButton
              isDisabled={cartItems.length <= 0}
              className="summary__btn"
              amount={cartTotal}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
