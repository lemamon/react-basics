import React, { useState } from "react";
import { login } from "./Auth";

const LoginPage = ({ history }) => {
  const [user, setUser] = useState("");
  const [pw, setPw] = useState("");

  const redirect = () => {
    history.push("/dashboard");
  };

  const handleSubmit = ev => {
    ev.preventDefault();

    login({ user, pw, redirect });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <input
          type="password"
          value={pw}
          onChange={e => setPw(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginPage;
