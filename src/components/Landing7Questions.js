import classes from "./Landing7Questions.module.css";
import Landing7Parts from "./Landing7Parts/Landing7Parts";
import { useContext } from "react";
import LanguageContextApi from "../store/languageContextApi";
import CustomInputIsValidHandler from "../customHooks/CustomInputIsValidHandler";
import ButtonStateHelperFunction from "../customHooks/buttonStateHelperFunction";

const Landing7Questions = () => {
  const {
    buttontotalState,
    handler1,
    handler2,
    handler3,
    handler4,
    handler5,
    handler6,
  } = ButtonStateHelperFunction();

  const ctx = useContext(LanguageContextApi);
  const contentData = ctx.landing7TotalContent;
  const {
    value: emailInputValue,
    isvalid: emailInputIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailInputChangeHandler,
    isTouchedHandler: emailInputIsTouchedHandler,
    resetHandler: emailInputReseetHandler,
  } = CustomInputIsValidHandler(
    (value) => value.includes("@") && value.trim().length > 0
  );

  let formIsValid = false;
  if (emailInputIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    emailInputReseetHandler();
  };

  const conditionCssClasses = emailInputHasError
    ? `${classes.inputandButtonDiv3} ${classes.invalid}`
    : `${classes.inputandButtonDiv3} `;

  const buttonStateHandler = (id) => {
    if (id === 1) {
      handler1();
    }
    if (id === 2) {
      handler2();
    }
    if (id === 3) {
      handler3();
    }
    if (id === 4) {
      handler4();
    }
    if (id === 5) {
      handler5();
    }
    if (id === 6) {
      handler6();
    }
  };

  return (
    <div className={classes.Landing7QuestionsDiv1}>
      <h1 className={classes.questionPartBigTitleH1}>
        {ctx.landing7TitleContent}
      </h1>
      <div className={classes.TotalQuestionDiv2}>
        {contentData.map((item) => (
          <Landing7Parts
            key={item.id}
            id={item.id}
            title={item.questionTitle}
            answer={item.questionAnswer}
            handleButton={buttonStateHandler}
            buttonState={buttontotalState}
          />
        ))}
      </div>
      <div className={classes.IntroAndInputAndButtonDiv2}>
        <form onSubmit={submitHandler}>
          <h3>{ctx.landing7H3Content}</h3>
          <div className={conditionCssClasses}>
            <div className={classes.inputAndSpanDiv4}>
              <input
                onChange={emailInputChangeHandler}
                onBlur={emailInputIsTouchedHandler}
                value={emailInputValue}
                type="text"
                required
              />
              <span className={classes.inputPlaceHolderSpan}>{ctx.landing7SpanContent}</span>
            </div>
            <button disabled={!formIsValid}>{ctx.landing7ButtonContent}</button>
          </div>
          <div className={classes.inputIsInvalidDiv3}>
            {emailInputHasError && (
              <p>{ctx.landing7EmailInputIsNotValidcontent}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Landing7Questions;
