import React, { useEffect } from "react";
import classes from "../styles/Home.module.css";
import WebFont from "webfontloader";

const Home = () => {
  //! Importing all the fonts using WebFont
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter", "Andika"],
      },
    });
  }, []);
  //! Icon imports
  const getIconPath = (iconName) => {
    return import(`../assets/${iconName}.png`);
  };

  return (
    <div>
      <div className={classes.hero}>
        <div className={classes.left}>
          <img src={getIconPath("facebook")} alt="facebook" height={100} />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className={classes.right}></div>
      </div>
    </div>
  );
};

export default Home;
