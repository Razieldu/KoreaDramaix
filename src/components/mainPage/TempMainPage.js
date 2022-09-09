import React from "react";
import classes from "./TempMainPage.module.css";
import { useContext } from "react";
import AuthContext from "../../store/authContextApi";
function TempMainPage() {
  const ctx = useContext(AuthContext);

  return (
    <div className={classes.mainpage}>
      <h1 className={classes.tempH1}>
        歡迎以{ctx.loginUser}的身分註冊為新成員
      </h1>
      <h1 className={classes.tempH1}>主要頁面建構中...</h1>
    </div>
  );
}

export default TempMainPage;
