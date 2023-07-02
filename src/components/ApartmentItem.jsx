import React from "react";
import classes from "../styles/AppartmentItem.module.css";

const ApartmentItem = ({ product }) => {
  const { photo, address, author, m3, price, rooms, parking } = product;

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <img className={classes.image} src={photo} alt="Item" />
        <div className={classes.details}>
          <div className={classes.address}>{address}</div>
          <ul>
            <li>{rooms} ком</li>
            <li>{m3} M</li>
            <li>{parking ? "наличие парковки" : "отсутствие парковки"}</li>
          </ul>
          <div className={classes.cardsBottom}>
            <div className={classes.postedBy}>{author}</div>
            <div className={classes.price}>
              <button className={classes.bottone5}>${price}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentItem;
