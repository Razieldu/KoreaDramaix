import classes from "./Landing7Parts.module.css";
import { useState, useEffect } from "react";
const Landing7Parts = (props) => {
  const data = props.buttonState;
  const checkId = Number(props.id);
 
  const [button, setButton] = useState(data[checkId]);
  useEffect(() => {
    setButton(data[checkId]);
  }, [data[checkId]]);

  const buttonHandler = () => {
    setButton((prev) => !prev);
    props.handleButton(checkId);
  };

  const button1Css = button
    ? `${classes.part1controlButtonDiv} ${classes.rotate}`
    : `${classes.part1controlButtonDiv}`;

  return (
    <div className={classes.question1QuestionandAnswerDiv3}>
      <div className={classes.question1AndControlButtonDiv4}>
        <button onClick={buttonHandler}>
          <h2 className={classes.question1TitleH2}>{props.title}</h2>
        </button>
        <div
          className={classes.wrapperQuestion1ButtonDiv}
          onClick={buttonHandler}
        >
          <div className={button1Css}></div>
        </div>
      </div>
      {button && (
        <div className={classes.question1AnswerDiv4}>
          <h2 className={classes.question1AnswerH2}>{props.answer}</h2>
        </div>
      )}
    </div>
  );
};

export default Landing7Parts;
