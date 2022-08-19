import classes from "./Landing5Everywhere.module.css";
import devicesPhoto from "../img/landing5-devicePile.png";
import landing5Video from "../video/landing5-video.mp4";
import { useContext } from "react";
import LanguageContextApi from "../store/languageContextApi";
const Landing5Everywhere = () => {
 const ctx = useContext(LanguageContextApi)
  return (
    <div className={classes.everywhereDiv1}>
      <div className={classes.introdictionEverywhereDiv2Left}>
        <h1>{ctx.landing5H1Content}</h1>
        <h2>{ctx.landing5H2Content}</h2>
      </div>
      <div className={classes.devicesDiv2Right}>
        <img className={classes.devicesImg3} src={devicesPhoto}></img>
        <video className={classes.landing5Video3} autoPlay muted loop>
          <source src={landing5Video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
export default Landing5Everywhere;
