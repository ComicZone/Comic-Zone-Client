import style from "./Preview.module.css";
import Button from "../Components/Button";
import Review from "../Components/Reviews/Review";
import Works from "../Components/Works/Works";
import Ratings from "../Components/Ratings";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useStoreContext } from "../Context/store_context";
import { useMemo } from "react";
import { useCartContext } from "../Context/cart_context";

function Preview() {
  const { store } = useStoreContext();
  const { addToCart } = useCartContext();
  const navigate = useNavigate();
  const { bookId } = useParams();
  const comic = useMemo(() => {
    const book = store.filter((comic) => comic._id === bookId)[0];
    return book;
  }, [store, bookId]);

  const handleBuy = async () => {
    addToCart(comic._id);
    navigate("/summary");
  };
  return (
    <div className={style.Preview}>
      <div className="Home">
        <div className={style.Home}>{/* <h2>Home/Preview</h2> */}</div>
        {!comic ? (
          <h2>Loading....</h2>
        ) : (
          <div className={style.Grid}>
            <div className={style.left}>
              <img className={style.left_img} src={comic.imageUrl} alt="" />
            </div>
            <div className={style.right}>
              {/* <h1>Peaceful Rath</h1> */}
              <h1>{comic.title}</h1>
              <div className="Bookview">
                <Ratings rating={comic.rating} />
                <p className="desc">
                  {/* Deadly republic is back! but what happens when the scary beast
                planned to execute the president in cold day. One of the biggest
                status quo change is years is here!Deadly republic is back! but
                what happens when the scary beast planned to execute the
                president in cold day. One of the biggest status quo change is
                years is here!Deadly republic is back! but what happens when the
                scary beast planned to execute the president in cold day. One of
                the biggest status quo change is years is here! One of the
                biggest status quo change is years is here!Deadly republic is
                back! but what happens when the scary beast planned to execute
                the president in cold day. One of the biggest status quo change
                is years is here!  */}
                  {comic.description}
                  <strong> Read More....</strong>
                </p>
                <Buttons
                  name="Add to cart"
                  onClick={() => {
                    addToCart(comic);
                  }}
                />
                {/* <Button name="BUY for $100" /> */}
                <Buy onClick={handleBuy}>Buy for {comic.price}</Buy>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={style.section2}>
        {/* <div className={style.Review}>
        <h2>Customers Reviews</h2> */}
        {/* <Review name="James Okoye" date="November 12 2022" content=" change is years is here!Deadly republic is back! but what happens change is years is  */}
        <div className="Section2">
          <div className={style.Review}>
            <h2>Customers Reviews</h2>
            <Review
              name="James Okoye"
              date="November 12 2022"
              content=" change is years is here!Deadly republic is back! but what happens change is years is 
            here!Deadly republic is back! but what happens when the scary beast planned to execute 
            the president in cold day. One of the biggest"
              color="pink"
            />{" "}
            <Review
              name="Daniel Wastera"
              date="November 12 2022"
              content=" change is years is here!Deadly republic is back! but what happens change is years is 
            here!Deadly republic is back! but what happens when the scary beast planned to execute 
            the president in cold day. One of the biggest"
              color="red"
            />
            <Review
              name="Frankly Uchenna"
              date="October 12 2022"
              content=" change is years is here!Deadly republic is back! but what happens change is years is 
            here!Deadly republic is back! but what happens when the scary beast planned to execute 
            the president in cold day. One of the biggest"
              color="purple"
            />
            <Review
              name="Asa Davidson"
              date="October 12 2022"
              content=" change is years is here!Deadly republic is back! but what happens change is years is 
            here!Deadly republic is back! but what happens when the scary beast planned to execute 
            the president in cold day. One of the biggest"
              color="yellow"
            />
            <Review
              name="Charles Okoye"
              date="November 12 2022"
              content=" change is years is here!Deadly republic is back! but what happens change is years is 
            here!Deadly republic is back! but what happens when the scary beast planned to execute 
            the president in cold day. One of the biggest"
              color="brown"
            />
          </div>
        </div>
        <div className={style.Realted}>
          <h2>Related Works</h2>
          <div className={style.second}>
            <Works
              name="Peaceful Rath"
              genre="Thrill/ Drama/ Sci-Fi"
              price="$100"
            />
            <Works
              name="Peaceful Rath"
              genre="Thrill/ Drama/ Sci-Fi"
              price="$100"
            />
            <Works
              name="Peaceful Rath"
              genre="Thrill/ Drama/ Sci-Fi"
              price="$100"
            />
            <Works
              name="Peaceful Rath"
              genre="Thrill/ Drama/ Sci-Fi"
              price="$100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;

const Buttons = styled(Button)``;

const Buy = styled.button`
  background: "crimson";
`;
