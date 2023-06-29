import React, { useEffect } from "react";
import classes from "../styles/Home.module.css";
import WebFont from "webfontloader";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import tiktokIcon from "../assets/tiktok.png";
import team from "../assets/team.jpg";
import Latest from "../components/Latest";

const Home = () => {
  //! Importing all the fonts using WebFont
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter", "Andika", "Caprasimo"],
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.hero}>
        <div className={classes.left}>
          <div className={classes.iconsLeft}>
            <img src={facebookIcon} alt="facebook" height={50} />
            <img src={instagramIcon} alt="instagram" height={50} />
            <img src={tiktokIcon} alt="tiktok" height={50} />
          </div>
          <div className={classes.headings}>
            <h1 className={classes.heading}>Эксперт Недвижимость</h1>
            <span>И тут можно добавить слоган</span>
          </div>
        </div>
        <div className={classes.right}>
          <img className={classes.heroImage} src={team} alt="team" />
        </div>
      </div>
      <Latest />
    </div>
  );
};

export default Home;
