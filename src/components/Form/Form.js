import { useRef } from "react";
import classes from "./Form.module.css";

function Form(props) {
  const getMemeHandler = (event) => {
    event.preventDefault();

    props.onFormSubmitted(
      topTextRef.current.value,
      bottomTextRef.current.value
    );
  };

  const topTextRef = useRef();
  const bottomTextRef = useRef();

  return (
    <form className={classes.form}>
      <div className={classes.inputs}>
        <input ref={topTextRef} placeholder="Top Text" />
        <input ref={bottomTextRef} placeholder="Bottom Text" />
      </div>
      <button className={classes.button} type="submit" onClick={getMemeHandler}>
        Get a new meme 🐉
      </button>
    </form>
  );
}

export default Form;
