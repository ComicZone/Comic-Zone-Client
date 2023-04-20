import React from "react";
// import { SummaryData } from "./SummaryData";
import { FastForwardCircle } from "phosphor-react";
import "../../Stylesheets/summary.css";
import Ratings from "../Ratings";

const SummaryCard = ({ cartItems }) => {
  if (cartItems.length <= 0) return <h2>Loading...</h2>;
  return (
    <>
      {cartItems.map((comic, val) => {
        return comic ? (
          <div className="summary__card" key={`summary-${val}`}>
            <div className="card">
              <div className="card__img">
                <img src={comic.imageUrl} alt="" />
              </div>

              <div className="card__details">
                <div className="summary__para">
                  <p>Price : {comic.price}</p>

                  <div className="rating__cont">
                    <p>Preview</p>
                    <Ratings
                      size={16}
                      rating={comic.rating}
                      className={"ratings"}
                    />
                    <div className="rating__count">({comic.preview_count})</div>
                  </div>
                </div>

                <div className="little__card__img">
                  <img src={comic.imageUrl} alt="" />
                  <img className="back__cover " src={comic.imageUrl} alt="" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h2 key={`summary-${val}`}>Loading...</h2>
        );
      })}
    </>
  );
};

export default SummaryCard;
