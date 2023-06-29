import React from "react";
import classes from "../styles/AppartmentItem.module.css";

const ApartmentItem = () => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <img
          className={classes.image}
          src="https://via.placeholder.com/158x191"
          alt="Item"
        />
        <div className={classes.details}>
          <div className={classes.address}>
            145/3 Название улицы,
            <br />
            Район или город
          </div>
          <ul>
            <li>5 ком</li>
            <li>150 M</li>
            <li>наличие парковки</li>
          </ul>
          <div className={classes.cardsBottom}>
            <div className={classes.postedBy}>Имя Риэлтора</div>
            <div className={classes.price}>
              <button className={classes.bottone5}>$45,545</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentItem;
