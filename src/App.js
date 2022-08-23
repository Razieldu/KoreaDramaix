import { Routes, Route} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
    </Routes>
  );
}

export default App;
