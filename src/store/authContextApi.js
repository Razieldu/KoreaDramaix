import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
  token: null,
  isLoggedIn: false,
  login: () => {},
  logOut: () => {},
  signupEmail: "",
  saveEmail:()=>{}
});



export const AuthContextProvider = (props) => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(null);
  const isLoggedIn = !!token;
  


  const loginHandler = (tokenData) => {
    setToken(tokenData);
  };
  const logoutHandler = () => {
    setToken(null);
  };
  const emailSaveHelper = (emailData) => {
    setEmail(emailData);
  };

  const contextAuthValue = {
    token: token,
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    saveEmail:emailSaveHelper,
    signupEmail: email,
  };

  return (
    <AuthContext.Provider value={contextAuthValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext