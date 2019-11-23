import React from "react";
import Card from "./Card";

const Stack = ({ data, isUser }) => (
  <div className="stack">
    {data.map(dt => (
      <Card data={dt} id={dt.id} key={dt.id} isUser={isUser} />
    ))}
  </div>
);

export default Stack;
