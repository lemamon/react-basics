import React from "react";

const Card = ({ user: { username, name, website } }) => (
  <div className="card">
    <h1>{username}</h1>
    <p>{name}</p>
    <a href={website}>{website}</a>
  </div>
);

export default Card;
