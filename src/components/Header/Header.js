import React from "react";
import classes from "./Header.module.css";
import trollFaceImage from "../../assets/troll-face.png";
function Header() {
  return (
    <div className={classes.header}>
      <img src={trollFaceImage} className={classes.img} />
      <h2>Meme Generator</h2>

      <h3 className={classes.quote}>
        The Fastest Meme Generator on the Planet
      </h3>
    </div>
  );
}

export default Header;
