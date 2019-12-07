import React, { useState, useEffect } from "react";
import Item from "./Item";
import store from "../store";

const List = () => {
  const [mData, setData] = useState(store.getState().data);

  useEffect(() => {
    store.subscribe(() => {
      const { data } = store.getState();
      setData(data);
    });
  }, []);

  return (
    <ul>
      {mData.map((i, idx) => (
        <Item idx={idx} key={idx} contact={i} />
      ))}
    </ul>
  );
};

export default List;
