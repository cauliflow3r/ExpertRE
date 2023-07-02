import React, { useEffect } from "react";
import classes from "../styles/Navbar.module.css";
import WebFont from "webfontloader";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter", "Andika"],
      },
    });
  }, []);

  return (
    <nav className={classes.nav}>
      <a href="/">
        <img
          width="96"
          height="96"
          src="https://img.icons8.com/material-two-tone/96/real-estate.png"
          alt="real-estate"
        />
      </a>
      <button class={classes.catalogueButton}>Каталог</button>
      <ul className={classes.ul}>
        <li>Главная</li>
        <li>О нас</li>
        <li>Новости</li>
        <li>Отзывы</li>
        <li>Контакты</li>
      </ul>
      <Link to="/add-listing">
        <button class={classes.catalogueButton}>+ Добавить объявления</button>
      </Link>
    </nav>
  );
};

export default Navbar;
