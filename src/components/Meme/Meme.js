import React from "react";
import classes from "./Meme.module.css";

function Meme(props) {
  return (
    <div className={classes.meme}>
      <img className={classes["meme--image"]} src={props.image} />
      <h2 className={`${classes["meme--text"]} ${classes["top"]}`}>
        {props.topText}
      </h2>
      <h2 className={`${classes["meme--text"]} ${classes["bottom"]}`}>
        {props.bottomText}
      </h2>
    </div>
  );
}

export default Meme;
