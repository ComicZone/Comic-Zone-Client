import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../Stylesheets/Comics.css";
import dead_republic from "../Assests/images/image2.png";
import { StoreContext, useStoreContext } from "../Context/store_context";

const Comics = () => {
  // const {state, fetchBooks} = useStoreContext()
  const {state, fetchBooks} = useContext(StoreContext)
  const [comic, setComic] = useState({ 
    title: "", 
    price: 0, 
    desc: "" 
  });
  useEffect(() => {
    fetchBooks()
     console.log("STATE:::: ", state);
    // if (state) {
    //   console.log("STATE:::: ", state.store);
    //   setComic(state.store[0]);
    // }
  }, []);

  return (
    <section className="latest-comics">
      <div className="latest-comics-header">
        <h2 className="latest-comic-lead-text">Latest Comics</h2>
        <Link to="/userdashboard" className="latest-comic-sub-text">
          See all
        </Link>
      </div>
      <div className="latest-comics-banner">
        <div className="left-banner">
          <div className="yellow-banner-image">
            <div className="banner-image">
              <img
                src={comic.imageUrl}
                className="dead-republic"
                alt="dead_republic_comic"
              />
            </div>
            <div className="banner-text">
              <div className="text_prices">
                <p className="banner-price">Price</p>
                <p className="banner-currency">{comic.price}</p>
              </div>
              <button className="banner-btn">Buy now</button>
            </div>
          </div>
        </div>
        <div className="right-banner">
          <p className="realease-date">Release date: 4th April 2023 </p>
          <h2 className="dead-republic">
            Dead <br /> Republic
          </h2>
          <p className="description">Description </p>
          <p className="dead-description">
            Deadly republic is back! but what happens when the scary beast
            planned to execute the president in cold day. One of the biggest
            status quo change is years is here!
          </p>
        </div>
      </div>
      {/* <div className="latest-comics-banner">
        <div className="left-banner">
          <div className="yellow-banner-image">
            <div className="banner-image">
              <img
                src={dead_republic}
                className="dead-republic"
                alt="dead_republic_comic"
              />
            </div>
            <div className="banner-text">
              <div className="text_prices">
                <p className="banner-price">Price</p>
                <p className="banner-currency">$50</p>
              </div>
              <Link to="/preview" className="banner-btn">
                Buy now
              </Link>
            </div>
          </div>
        </div>
        <div className="right-banner">
          <p className="realease-date">Release date: 4th April 2023 </p>
          <h2 className="dead-republic">
            Dead <br /> Republic
          </h2>
          <p className="description">Description </p>
          <p className="dead-description">
            Deadly republic is back! but what happens when the scary beast
            planned to execute the president in cold day. One of the biggest
            status quo change is years is here!
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default Comics;
