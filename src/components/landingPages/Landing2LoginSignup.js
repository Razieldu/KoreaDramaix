import classes from "./Landing2LoginSignup.module.css";
import { useContext} from "react";
import LanguageContextApi from "../../store/languageContextApi";
import CustomInputIsValidHandler from "../../customHooks/CustomInputIsValidHandler";

const LandingLoginSignup = () => {
  const ctx = useContext(LanguageContextApi);

  const {
    value: enteredEmail,
    isvalid: emailIsValid,
    hasError: emailhasError,
    inputChangeHandler: emailChangeHandler,
    isTouchedHandler: emailIsTouchedHandler,
    resetHandler: resetEmail,
  } = CustomInputIsValidHandler(
    (value) => value.includes("@") && value.trim().length > 0
  );

  const cssClasses = emailhasError
    ? `${classes.invalid} ${classes.inputAndButtonDiv}`
    : `${classes.inputAndButtonDiv}`;

  let formIsValid = false;
  if (emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetEmail();
  };

  return (
    <div className={classes.loginWrapper}>
      <div className={classes.signupContent}>
        <form onSubmit={submitHandler}>
          <h1>{ctx.landing2H1Content}</h1>
          <h2>{ctx.landing2H2Content}</h2>
          <h3>{ctx.landing2H3Content}</h3>
          <div className={cssClasses}>
            <div className={classes.inputAndSpanDiv}>
            <input
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailIsTouchedHandler}
              required
              type="text"
            />
            <span className={classes.placeholderSpan}>{ctx.landing2SpanContent}</span>
            </div>
            <button disabled={!formIsValid}>{ctx.landing2ButtonContent}</button>
          </div>
          <div className={classes.inputIsInvalidDiv}>
            {emailhasError && (
              <p className={classes.invalidInputP}>
                {ctx.landing2EmailInputIsNotValidcontent}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LandingLoginSignup;