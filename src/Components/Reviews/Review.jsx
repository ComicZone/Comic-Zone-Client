import style from "./Review.module.css";
function Review ({name, date, content, color}) {
    return (
        <div className={style.Review}>
            <div className={style.left} style={{backgroundColor: `${color}`}}></div>
            <div className={style.right}>
                <h2>{name}</h2>
               <h4>{date}</h4>
               <p>{content}</p>
            </div>
        </div>
    )
}
export default Review;