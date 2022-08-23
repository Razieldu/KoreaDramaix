import classes from "./Landing3Function.module.css";
import tv from "../../assets/img/landing3TvFunction.png";
import lawyerVideo from "../../assets/video/functionVideo.mp4";
import { useContext } from "react";
import LanguageContextApi from "../../store/languageContextApi";
const Landing3Function = () => {
  const ctx = useContext(LanguageContextApi);
  return (
    <div className={classes.wrapperDiv}>
      <div className={classes.introductionDiv}>
        <h1>{ctx.landing3H1Content}</h1>
        <h2>{ctx.landing3H2Content}</h2>
      </div>
      <div className={classes.tvAndVideo}>
        <img className={classes.tvImg} src={tv}></img>
        <video className={classes.videoLawyer} autoPlay playsInline muted loop>
          <source src={lawyerVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Landing3Function;
