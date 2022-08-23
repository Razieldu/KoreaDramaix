import classes from "./Landing6Children.module.css";
import children from "../../img/landing6Children.png";
import childrenEnglish from "../../img/landing6ChildrenEnglish.png";
import { useContext } from "react";
import LanguageContextApi from "../../store/languageContextApi";
const Landing6Children = () => {
  const ctx = useContext(LanguageContextApi);
  let childrenImage;
  if (ctx.language === "中文") {
    childrenImage = children;
  } else if (ctx.language === "English") {
    childrenImage = childrenEnglish;
  }else{
    childrenImage = childrenEnglish;
  }
  return (
    <div className={classes.landing6Div1}>
      <div className={classes.landing6ImageDiv2}>
        <img className={classes.childrenPhoto} src={childrenImage}></img>
      </div>
      <div className={classes.landing6IntroductionDiv2}>
        <h1>{ctx.landing6H1Content}</h1>
        <h2>{ctx.landing6H2Content}</h2>
      </div>
    </div>
  );
};

export default Landing6Children;
