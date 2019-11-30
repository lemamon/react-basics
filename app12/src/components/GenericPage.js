import React from "react";
import { useParams } from "react-router-dom";
const GenericPage = () => {
  const { id } = useParams();
  return (
    <React.Fragment>
      <h1>Generic Page</h1>
      <p>{id}</p>
    </React.Fragment>
  );
};

export { GenericPage };
