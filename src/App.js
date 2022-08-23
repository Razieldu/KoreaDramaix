import { Routes, Route, Link } from "react-router-dom";

import LandingPage from "./Pages/LoginPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
    </Routes>
  );
}

export default App;
