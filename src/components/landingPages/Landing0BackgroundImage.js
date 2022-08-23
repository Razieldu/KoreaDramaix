import classes from "./Landing0BackgroundImage.module.css";
import { useContext } from "react";
import LanguageContextApi from "../../store/languageContextApi";
import backgroundChinese from "../../img/landingPagebackgroundChinese.jpg";
import backgroundEnglish from "../../img/landingPagebackgroundEnglish.jpg";
import backgroundKorea from "../../img/landingPagebackgroundKorea.jpg";
const Landing0Background = () => {
  const ctx = useContext(LanguageContextApi);
  let background;
  let backgroundCss;
  if (ctx.language === "中文") {
    background = backgroundChinese;
    backgroundCss=classes.headerBackground
  } else if (ctx.language === "English") {
    background = backgroundEnglish;
    backgroundCss=classes.headerBackground
  } else {
    background = backgroundKorea;
    backgroundCss=classes.koreaBackground
  }
  return (
    <div className={classes.backgroundDiv}>
      <img src={background} className={backgroundCss}></img>
    </div>
  );
};

export default Landing0Background;
