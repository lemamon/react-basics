import React from "react";
import Header from "./Header";
import List from "./List";
import Logout from "./Logout";

const DashboardPage = ({ history }) => {
  const redirect = () => {
    history.push("/");
  };

  return (
    <React.Fragment>
      <Header />
      <List />
      <Logout redirect={redirect} />
    </React.Fragment>
  );
};

export default DashboardPage;
