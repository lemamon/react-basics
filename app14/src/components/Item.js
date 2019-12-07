import React, { useState, useEffect, useCallback } from "react";
import store from "./../store";

const Item = ({ contact, idx }) => {
  const [count, setCount] = useState(0);

  const edit = () => {
    store.dispatch({
      type: "EDIT_CONTACT",
      index: idx,
      newData: { name: "Fulano", email: "Fulano@email.com" }
    });
  };

  const deleteItem = () => {
    store.dispatch({
      type: "DELETE_CONTACT",
      index: idx
    });
  };

  const fun = () => {
    console.log("fun");
  };

  const funCallback = useCallback(fun, []);

  useEffect(() => {
    console.log("teste");
    funCallback();
    return () => {};
  }, [count, funCallback]);

  return (
    <li>
      <p>{contact.name}</p>
      <p>{contact.email}</p>
      <p>{count}</p>
      <div>
        <button onClick={edit}>edit</button>
        <button onClick={deleteItem}>delete</button>
        <button onClick={() => setCount(count + 1)}>add</button>
      </div>
    </li>
  );
};

export default Item;
