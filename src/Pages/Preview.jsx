import img1 from "../Img/Img1.png";
import style from "./Preview.module.css";
import Button from "../Components/Button";
import Review from "../Components/Reviews/Review";
// import Works from "../Components/Works/Works";
function Preview() {
  return (
    <div className={style.Preview}>
      <div className="Home">
        <div className={style.Home}>
          {/* <h2>Home/Preview</h2> */}
        </div>
        <div className={style.Grid}>
          <div className={style.left}>
            <img className={style.left_img} src={img1} alt="" />
          </div>
          <div className={style.right}>
            <h1>Peaceful Rath</h1>
            <div className="Bookview">
              <div className="icons"></div>
              <p>
                Deadly republic is back! but what happens when the scary beast
                planned to execute the president in cold day.One of the biggest
                status quo change is years is here!Deadly republic is back! but
                what happens when the scary beast planned to execute the
                president in cold day. One of the biggest status quo change is
                years is here!Deadly republic is back! but what happens when the
                scary beast planned to execute the president in cold day. One of
                the biggest status quo change is years is here! One of the
                biggest status quo change is years is here!Deadly republic is
                back! but what happens when the scary beast planned to execute
                the president in cold day. One of the biggest status quo change
                is years is here! Read more..
              </p>
              <Button name="Add to cart"/>
              <Button name="Price $100  Buy"/>
            </div>
          </div>
        </div>
      </div>
      <div className="Section2">
      <div className={style.Review}>
        <h2>Customers Reviews</h2>
        <Review name="James Okoye" date="November 12 2022" content=" change is years is here!Deadly republic is back! but what happens change is years is 
            here!Deadly republic is back! but what happens when the scary beast planned to execute 
            the president in cold day. One of the biggest" color="pink"/>
            <Review name="Daniel Wastera" date="November 12 2022" content=" change is years is here!Deadly republic is back! but what happens change is years is 
            here!Deadly republic is back! but what happens when the scary beast planned to execute 
            the president in cold day. One of the biggest" color="red"/>
            <Review name="Frankly Uchenna" date="October 12 2022" content=" change is years is here!Deadly republic is back! but what happens change is years is 
            here!Deadly republic is back! but what happens when the scary beast planned to execute 
            the president in cold day. One of the biggest" color="purple"/>
            <Review name="Asa Davidson" date="October 12 2022" content=" change is years is here!Deadly republic is back! but what happens change is years is 
            here!Deadly republic is back! but what happens when the scary beast planned to execute 
            the president in cold day. One of the biggest" color="yellow"/>
            <Review name="Charles Okoye" date="November 12 2022" content=" change is years is here!Deadly republic is back! but what happens change is years is 
            here!Deadly republic is back! but what happens when the scary beast planned to execute 
            the president in cold day. One of the biggest" color="brown"/>
      </div>
      <div className="RealtedWorks">
        <h2>Related Works</h2>
        {/* <Works/> */}
      </div>
      </div>
      
    </div>
  );
}

export default Preview;