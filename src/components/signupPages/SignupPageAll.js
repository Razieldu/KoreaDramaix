import classes from "./SignupPageAll.module.css";
import BackgroundLayout from "../layout/BackgroundLayout";
import Landing1NavigationBar from "../landingPages/Landing1NavigationBar";
import Landing8Service from "../landingPages/Landing8Service";
import LanguageContextApi from "../../store/languageContextApi";
import AuthContext from "../../store/authContextApi";
import { useContext} from "react";

const SignupPageAll = () => {
  const ctxAuth = useContext(AuthContext);
  const ctxLanguage = useContext(LanguageContextApi);
  const changeHandler = (event) => {
    ctxAuth.saveEmail(event.target.value);
  };
  return (
    <BackgroundLayout color="white">
      <Landing1NavigationBar />
      <hr></hr>
      <div className={classes.signupPageTotalDiv1}>
        <form>
          <div className={classes.inputDiv2}>
            <h1 className={classes.introduction}>
              加入 KoreaDramaix 非常簡單。
            </h1>
            <p className={classes.introP}>
              請輸入你的Email以及密碼,馬上開始觀賞
            </p>
            {/* <p className={classes.emailTitle}>電子郵件</p> */}
            {/* <p className={classes.emailContent}>{ctxAuth.signupEmail}</p> */}
            <div className={classes.emailInputDiv3}>
              <input
                type="text"
                value={ctxAuth.signupEmail}
                onChange={changeHandler}
                required
              />
              <span className={classes.emailSpan}>請輸入電子郵件</span>
            </div>
            <div className={classes.passwordInputDiv3}>
              <input type="text" required />
              <span className={classes.passwordSpan}>請輸入密碼</span>
            </div>
            {/* <p className={classes.invalidP}>請輸入有效密碼</p> */}
          </div>
          <p className={classes.forgetPasswordP}>忘記密碼?</p>
          <button className={classes.signupButton}>註冊</button>
        </form>
      </div>
      <div className={classes.wrapperDiv}>
        <Landing8Service />
      </div>
    </BackgroundLayout>
  );
};

export default SignupPageAll;
