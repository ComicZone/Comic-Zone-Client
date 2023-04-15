import style from "./Works.module.css";
// import Button from "../Button";
import img2 from "../../Img/Img2.png";
function Works({ name, genre, price, rating }) {
    return (
      <div className={style.RelatedWorks}> 
        <div className={style.left_img2}>
          <img className={style.left_img2} src={img2} alt="" />
        </div>
        <div className="right">
          <h3>{name}</h3>
          <p>{genre}</p>
          <p>{rating}</p>
          <p>{price}</p>
         <button className={style.btn1}>Add to cart</button>
        </div>
      </div>
    );
  }
  
  export default Works