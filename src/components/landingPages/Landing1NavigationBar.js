import classes from "./Landing1NavigationBar.module.css";
import earth from "../../assets/img/landing1NavEarth.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import LanguageContextApi from "../../store/languageContextApi";

const Landing1NavigationBar = () => {
  const ctx = useContext(LanguageContextApi);
  const languageChangeHandler = (event) => {
    ctx.changeLanguageHandler(event.target.value);
  };
  return (
    <div className={classes.navigation} id="top">
      <Link style={{ textDecoration: 'none' }} to="/">
        <h1 className={classes.text}>KoreaDramaix</h1>
      </Link>
      <nav>
        <div className={classes.loginButtonAndSelect}>
          <img className={classes.navImg} src={earth} />
          <select
            onChange={languageChangeHandler}
            className={classes.text}
            value={ctx.language}
          >
            <option value="中文">中文</option>
            <option value="English">English</option>
            <option value="한국인">한국인</option>
          </select>
          <ul>
            <li>
              <Link to="/" className={classes.text}>
                <button>{ctx.navLoginButton}</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Landing1NavigationBar;
