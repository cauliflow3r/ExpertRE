import React, { useEffect } from "react";
import classes from "../styles/Navbar.module.css";
import WebFont from "webfontloader";

const Navbar = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter", "Andika"],
      },
    });
  }, []);

  return (
    <nav className="nav">
      <a href="localhost:3000">
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
      <button class={classes.catalogueButton}>+ Добавить объявления</button>
    </nav>
  );
};

export default Navbar;
