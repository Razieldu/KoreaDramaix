import classes from "./Landing4Download.module.css";
import movieImg from "../../assets/img/landing4-boxshot.png";
import phoneImg from "../../assets/img/landing4-mobile.jpg";
import animationIcon from "../../assets/img/landing4-download-icon.gif";
import { useContext } from "react";
import LanguageContextApi from "../../store/languageContextApi";
const Landing4Download = () => {
  const ctx = useContext(LanguageContextApi);
  return (
    <div className={classes.downloadFunctionPart}>
      <div className={classes.imgs}>
        <img className={classes.phonePhoto} src={phoneImg}></img>
        <div className={classes.fixedDiv}>
          <div className={classes.movieandAnimation}>
            <div className={classes.moiveandDownloadingStatus}>
              <img className={classes.movieImgStrangeThing} src={movieImg}></img>
              <div className={classes.downloadingExplaination}>
                <h3 className={classes.movieTitle}>
                  {ctx.landing4H3ContentMovieTitle}
                </h3>
                <h3 className={classes.movieDownloading}>
                  {ctx.landing4H3ContentDownloading}
                </h3>
              </div>
            </div>
            <img className={classes.downloadIcon} src={animationIcon}></img>
          </div>
        </div>
      </div>
      <div className={classes.explainationPart}>
        <h1 className={classes.downloadFunctionPartExplainationH1}>
          {ctx.landing4H1Content}
        </h1>
        <h2 className={classes.downloadFunctionPartExplainationH2}>
          {ctx.landing4H2Content}
        </h2>
      </div>
    </div>
  );
};

export default Landing4Download;
