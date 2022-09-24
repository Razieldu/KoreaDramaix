export const LoginHelperFunction = (email, password, ctxAuth, navigate) => {
  fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB3ntXWWHbLkf0huxz0dbH_8N4IFQXuqd8",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage;
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        });
      }
    })
    .then((response) => {
      ctxAuth.login(response.idToken);
      ctxAuth.saveUser(response.email);
      navigate("/main");
    })
    .catch((error) => {
      console.log(error);
    });
};
