import classes from "./SignupPageAll.module.css";
import BackgroundLayout from "../layout/BackgroundLayout";
import Landing1NavigationBar from "../landingPages/Landing1NavigationBar";
import Landing8Service from "../landingPages/Landing8Service";
import LanguageContextApi from "../../store/languageContextApi";
import AuthContext from "../../store/authContextApi";
import { useContext, useEffect } from "react";
import CustomInputIsValidHandler from "../../customHooks/CustomInputIsValidHandler";

let firstTimeLoading = true;

const SignupPageAll = () => {
  const ctxAuth = useContext(AuthContext);
  const ctxLanguage = useContext(LanguageContextApi);
  const {
    value: emailValue,
    isvalid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    isTouchedHandler: emailIsTouchedHandelr,
    resetHandler: emailResetHandler,
  } = CustomInputIsValidHandler(
    (value) => value.trim().length > 0 && value.trim().includes("@")
  );
  const {
    value: passwordValue,
    isvalid: passwordIsValid,
    hasError: passwordHasError,
    inputChangeHandler: passwordChangeHandler,
    isTouchedHandler: passwordIsTouchedHandelr,
    resetHandler: passwordResetHandler,
  } = CustomInputIsValidHandler((value) => value.trim().length > 7);

  const emailCssClasses = emailHasError
    ? `${classes.invalid} ${classes.emailInputDiv3}`
    : `${classes.emailInputDiv3}`;

  const passwordCssClasses = passwordHasError
    ? `${classes.invalid} ${classes.passwordInputDiv3}`
    : `${classes.passwordInputDiv3}`;

  let formIsValid = false;
  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  let emailInput = ctxAuth.signupEmail;
  let newEmailInput = emailValue;

  const change = (event) => {
    if (firstTimeLoading) {
      firstTimeLoading = false;
    }
    emailChangeHandler(event);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    emailResetHandler();
    passwordResetHandler();
  };
  return (
    <BackgroundLayout color="white">
      <Landing1NavigationBar />
      <hr></hr>
      <div className={classes.signupPageTotalDiv1}>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.inputDiv2}>
            <h1 className={classes.introduction}>
              {ctxLanguage.signupPageH1Content}
            </h1>
            <p className={classes.introP}>
              {ctxLanguage.signupPageIntroContent}
            </p>
            <p className={classes.emailTitle}>
              {ctxLanguage.signupPageInputTitle}
            </p>
            {/* <p className={classes.emailContent}>{ctxAuth.signupEmail}</p> */}
            <div className={emailCssClasses}>
              <input
                type="text"
                value={firstTimeLoading ? emailInput : newEmailInput}
                onChange={change}
                onBlur={emailIsTouchedHandelr}
                required
              />
              <span className={classes.emailSpan}>
                {ctxLanguage.signupPageEmailSpanContent}
              </span>
            </div>
            {emailHasError && (
              <div className={classes.invalidPDiv}>
                <p className={classes.invalidP}>
                  {ctxLanguage.signupPageInvalidEmailPContent}
                </p>
              </div>
            )}
            <div className={passwordCssClasses}>
              <input
                type="text"
                required
                value={passwordValue}
                onChange={passwordChangeHandler}
                onBlur={passwordIsTouchedHandelr}
              />
              <span className={classes.passwordSpan}>
                {ctxLanguage.signupPagePasswordSpanContent}
              </span>
            </div>
            {passwordHasError && (
              <div className={classes.invalidPDiv}>
                <p className={classes.invalidP}>
                  {ctxLanguage.signupPageInvalidPasswordPContent}
                </p>
              </div>
            )}
          </div>
          <p className={classes.forgetPasswordP}>
            {ctxLanguage.signupPageeforgetPasswordPContent}
          </p>
          <button disabled={!formIsValid} className={classes.signupButton}>
            {ctxLanguage.signupPageButtonContent}
          </button>
        </form>
      </div>
      <div className={classes.wrapperDiv}>
        <Landing8Service />
      </div>
    </BackgroundLayout>
  );
};

export default SignupPageAll;
