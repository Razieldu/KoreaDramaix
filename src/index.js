import React from "react";
import ReactDOM from "react-dom/client";
import { LanguageContextApiProvider } from "./store/languageContextApi";
import { AuthContextProvider } from "./store/authContextApi";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <LanguageContextApiProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageContextApiProvider>
  </AuthContextProvider>
);
