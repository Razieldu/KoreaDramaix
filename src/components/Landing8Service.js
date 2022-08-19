import classes from "./Landing8Service.module.css";
import LanguageContextApi from "../store/languageContextApi";
import earth from "../img/landing1NavEarth.png";
import { useContext } from "react";
const Landing8Service = () => {
  const ctx = useContext(LanguageContextApi);
  const languageChangeHandler = (event) => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    ctx.changeLanguageHandler(event.target.value);
  };

  return (
    <div className={classes.Landing8ServiceTotalDiv1}>
      <h3>{ctx.landing8H3Content}</h3>
      <div className={classes.servicesDiv2}>
        <div className={classes.servicesDiv3}>
          <h4>{ctx.landing8TotalServicesContent.title1}</h4>
          <h4>{ctx.landing8TotalServicesContent.title2}</h4>
          <h4>{ctx.landing8TotalServicesContent.title3}</h4>
          <h4>{ctx.landing8TotalServicesContent.title4}</h4>
        </div>
        <div className={classes.servicesDiv3}>
          <h4>{ctx.landing8TotalServicesContent.title5}</h4>
          <h4>{ctx.landing8TotalServicesContent.title6}</h4>
          <h4>{ctx.landing8TotalServicesContent.title7}</h4>
          <h4>{ctx.landing8TotalServicesContent.title8}</h4>
        </div>
        <div className={classes.servicesDiv3}>
          <h4>{ctx.landing8TotalServicesContent.title9}</h4>
          <h4>{ctx.landing8TotalServicesContent.title10}</h4>
          <h4>{ctx.landing8TotalServicesContent.title11}</h4>
          <h4>{ctx.landing8TotalServicesContent.title12}</h4>
        </div>
        <div className={classes.servicesDiv3}>
          <h4>{ctx.landing8TotalServicesContent.title13}</h4>
          <h4>{ctx.landing8TotalServicesContent.title14}</h4>
          <h4>{ctx.landing8TotalServicesContent.title15}</h4>
          <h4>{ctx.landing8TotalServicesContent.title16}</h4>
        </div>
      </div>
      <div className={classes.languageLogoAndSelectDiv3}>
        <img className={classes.languageLogo} src={earth}></img>
        <select
          value={ctx.language}
          onChange={languageChangeHandler}
          className={classes.bottomSelect}
        >
          <option value="中文">中文</option>
          <option value="English">English</option>
          <option value="한국인">한국인</option>
        </select>
      </div>

      <h5 className={classes.copyrightH5}>KoreaDramaix Taiwan</h5>
    </div>
  );
};

export default Landing8Service;
