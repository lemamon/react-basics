import React from "react";
import Card from "./Card";

const Stack = ({ users }) => (
  <div className="stack">
    {users.map(user => (
      <Card key={user.id} user={user} />
    ))}
  </div>
);

export default Stack;
