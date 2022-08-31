import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignupPage from "./Pages/SignupPage";
import TempMainPage from "./Pages/MainPage";
import { useContext } from "react";
import AuthContext from "./store/authContextApi";
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      {authCtx.token && <Route path="/main" element={<TempMainPage />}></Route>}
      {/* {true && <Route path="/main" element={<TempMainPage />}></Route>} */}
    </Routes>
  );
}

export default App;
