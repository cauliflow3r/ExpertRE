import React from "react";
import classes from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className={classes.topContainer}>
        <button>Каталог</button>
        <ul className={classes.ul}>
          <li>Главная</li>
          <li>О нас</li>
          <li>Новости</li>
          <li>Отзывы</li>
          <li>Контакты</li>
        </ul>
        <button>+Добавить объявления</button>
      </div>
      <div className={classes.bottomContainer}>
        <img src="./logo.png" alt="logo" />
        <span id="address">Байтик Баатыра 70, БЦ SOHO,4 этаж, 401 кабинет</span>
        <img src="../assets/logo.png" alt="soemthing" width={100} />
      </div>
    </nav>
  );
};

export default Navbar;
