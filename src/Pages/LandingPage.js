import Landing0BackgroundImage from "../components/landingPages/Landing0BackgroundImage";
import Landing1NavigationBar from "../components/landingPages/Landing1NavigationBar";
import Landing2LoginSignup from "../components/landingPages/Landing2LoginSignup";
import Landing3Function from "../components/landingPages/Landing3Function";
import Landing4Download from "../components/landingPages/Landing4Download";
import Landing5Everywhere from "../components/landingPages/Landing5Everywhere";
import Landing6Children from "../components/landingPages/Landing6Children";
import Landing7Questions from "../components/landingPages/Landing7Questions";
import Landing8Service from "../components/landingPages/Landing8Service";
import { Fragment } from "react";
function LandingPage () {
  return (
    <Fragment>
      <Landing0BackgroundImage />
      <Landing1NavigationBar />
      <Landing2LoginSignup />
      <Landing3Function />
      <Landing4Download />
      <Landing5Everywhere />
      <Landing6Children />
      <Landing7Questions />
      <Landing8Service />
    </Fragment>
  );
};

export default LandingPage;
