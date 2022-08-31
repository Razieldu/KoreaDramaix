import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
  token: null,
  isLoggedIn: false,
  loginUser: "",
  signupEmail: "",
  login: () => {},
  logOut: () => {},
  saveUser:()=>{},
  saveEmail: () => {},
});

export const AuthContextProvider = (props) => {
  const [user, setLoginuser] = useState("");
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

  const userSaveHelper = (userName) => {
    setLoginuser(userName);
  };
  const contextAuthValue = {
    token: token,
    isLoggedIn,
    signupEmail: email,
    loginUser: user,
    login: loginHandler,
    logout: logoutHandler,
    saveEmail: emailSaveHelper,
    saveUser: userSaveHelper,
  };

  return (
    <AuthContext.Provider value={contextAuthValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
