import React, { useEffect, useState } from "react";
import ApartmentItem from "./ApartmentItem";
import { Link } from "react-router-dom";
import { useProducts } from "../contexts/ProductContextProvider";
import classes from "../styles/Latest.module.css";

const Latest = () => {
  const { products, getProducts } = useProducts();
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    // Get the latest 5 products from the products array
    const latest = products.slice(0, 6);
    setLatestProducts(latest);
  }, [products]);

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.topBar}>
          <h2>Cвежие объявления</h2>
          <Link to="/products">
            <button className={classes.bottone5}>Посмотреть всё</button>
          </Link>
        </div>
        <div className={classes.cardsContainer}>
          {latestProducts.map((product) => (
            <ApartmentItem
              className={classes.card}
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
