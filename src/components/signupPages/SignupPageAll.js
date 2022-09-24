import classes from "./SignupPageAll.module.css";
import BackgroundLayout from "../layout/BackgroundLayout";
import Landing1NavigationBar from "../landingPages/Landing1NavigationBar";
import Landing8Service from "../landingPages/Landing8Service";
import LanguageContextApi from "../../store/languageContextApi";
import AuthContext from "../../store/authContextApi";
import { LoginHelperFunction } from "../../customHooks/loginHelperFunction";
import { useContext, useEffect, useRef } from "react";
import CustomInputIsValidHandler from "../../customHooks/CustomInputIsValidHandler";
import { useNavigate } from "react-router-dom";

let firstTimeLoading = true;

const SignupPageAll = () => {
  const navigate = useNavigate();
  const ctxAuth = useContext(AuthContext);
  const ctxLanguage = useContext(LanguageContextApi);
  const emailRef = useRef();
  const {
    value: emailValue,
    isvalid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    isTouchedHandler: emailIsTouchedHandler,
    blurButNoChangeHandler: emailBlurButNoChangeHandler,
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
  } = CustomInputIsValidHandler((value) => value.trim().length > 6);

  const emailCssClasses = emailHasError
    ? `${classes.invalid} ${classes.emailInputDiv3}`
    : `${classes.emailInputDiv3}`;

  const passwordCssClasses = passwordHasError
    ? `${classes.invalid} ${classes.passwordInputDiv3}`
    : `${classes.passwordInputDiv3}`;

  let formIsValid = false;

  if (
    emailIsValid ||
    (ctxAuth.signupEmail.trim().length > 0 && passwordIsValid)
  ) {
    formIsValid = true;
  }

  useEffect(() => {
    if (!firstTimeLoading && ctxAuth.signupEmail.trim().length > 0) {
      firstTimeLoading = true;
    }
  }, []);

  const change = (event) => {
    if (firstTimeLoading) {
      firstTimeLoading = false;
    }
    emailChangeHandler(event);
  };

  const blur = (event) => {
    if (firstTimeLoading) {
      emailBlurButNoChangeHandler(event);
      emailIsTouchedHandler(event);
    } else {
      emailIsTouchedHandler(event);
    }
  };

  let email = firstTimeLoading ? ctxAuth.signupEmail : emailValue;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    LoginHelperFunction(email, passwordValue, ctxAuth, navigate);
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
                value={email}
                onChange={change}
                onBlur={blur}
                ref={emailRef}
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
                min="6"
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
