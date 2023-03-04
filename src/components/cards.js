import React from 'react'
import {useNavigate} from "react-router-dom"
import CardsCSS from "./cards.module.css";

function Cards(props) {
    
    const navigate = useNavigate()

    const summaryData = {
      sumImg: props.show.image,
      sumName: props.show.name,
      sumPremiered: props.show.premiered,
      sumStatus: props.show.status,
      summary: props.show.summary,
    }
    function handleClick(){
      navigate("/summary" , {state:{data : summaryData}})
    }


  return (
    <>
      <div className={CardsCSS.cards}>
        <div className={CardsCSS.card__img}>
        <img
          src= {props.show.image != null && props.show.image.medium}
          alt="No Img Available"
        />
        </div>
        <div className={CardsCSS.card__body}>
          <span className={CardsCSS.card__title}>{props.show.name}</span>
          <p>
            <span>{props.show.premiered}</span>
            <span>
            {props.show.runtime > 0 ? `${props.show.runtime} mins` : "No Info"}
            </span>
            <span>{props.show.genres[0]}, {props.show.genres[1]}</span>
          </p>
          <span className={CardsCSS.card__rating}>
          {props.show.rating.average > 0
                ? `${props.show.rating.average} ⭐`
                : "No Rating"}
          </span>
          <button onClick={handleClick} >View Summary</button>
        </div>
      </div>
    </>
  );
}

export default Cards;
