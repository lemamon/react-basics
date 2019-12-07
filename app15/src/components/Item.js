import React from "react";
import { useDispatch } from "react-redux";
import { edit, deleteItem } from "../actions/contact";

const Item = ({ contact, idx }) => {
  const dispatch = useDispatch();

  return (
    <p>
      <p>{contact.name}</p>
      <p>{contact.email}</p>
      <div>
        <button onClick={() => dispatch(edit(idx))}>edit</button>
        <button onClick={() => dispatch(deleteItem(idx))}>delete</button>
      </div>
    </p>
  );
};

export default Item;

// import React from "react";
// import { connect } from "react-redux";
// import { edit, deleteItem } from "../actions/contact";

// const Item = ({ contact, idx, edit, deleteItem }) => {
//   return (
//     <p>
//       <p>{contact.name}</p>
//       <p>{contact.email}</p>
//       <div>
//         <button onClick={() => edit(idx)}>edit</button>
//         <button onClick={() => deleteItem(idx)}>delete</button>
//       </div>
//     </p>
//   );
// };

// const mapDispatchProps = dispatch => ({
//   edit: idx => dispatch(edit(idx)),
//   deleteItem: idx => dispatch(deleteItem(idx))
// });

// export default connect(() => {}, mapDispatchProps)(Item);
