import React from "react";
import { logout } from "./Auth";

const Logout = ({ redirect }) => {
  const handleLogout = () => {
    logout({ redirect });
  };

  const confirmLogout = () => window.confirm("deseja fazer logout");

  const handleSubmit = ev => {
    ev.preventDefault();

    if (confirmLogout()) {
      handleLogout();
    } else {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="submit" value="logout" />;
    </form>
  );
};

export default Logout;
