import React, { useMemo, } from "react";
import { Link } from "react-router-dom";
import "../Stylesheets/Comics.css";
import { useStoreContext } from "../Context/store_context";


const Comics = () => {
  const { store } = useStoreContext();
  const comic = useMemo(() => {
    return store.length > 0 ? store[store.length - 1] : {
    title: "",
    price: 0,
    description: "",
    releaseDate: "",
    imageUrl:""
  }
  }, [store]);

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
                alt={comic.title}
              />
            </div>
            <div className="banner-text">
              <div className="text_prices">
                <p className="banner-price">Price</p>
                <p className="banner-currency">{comic.price}</p>
              </div>
              {/* <button className="banner-btn" onClick={() => preview(comic._id)}> */}
              <Link className="banner-btn" to={comic && `preview/${comic._id}`}>
                Buy now
              </Link>
              {/* </button> */}
            </div>
          </div>
        </div>
        <div className="right-banner">
          <p className="realease-date">{comic.releaseDate} </p>
          <h2 className="dead-republic">
            {/* Dead <br /> Republic */}
            {comic.title}
          </h2>
          <p className="description">Description </p>
          <p className="dead-description">
            {comic.description}
            {/* Deadly republic is back! but what happens when the scary beast
            planned to execute the president in cold day. One of the biggest
            status quo change is years is here! */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comics;
