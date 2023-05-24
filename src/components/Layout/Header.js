import { Fragment } from "react";
import mealsImage from "../../assets/Image.png";
import HeaderCartButton from './HeaderCartButton.js'
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>"Meals Items"</h1>
        <HeaderCartButton onClick={props.onShowcart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Order delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
