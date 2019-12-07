import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";

const List = () => {
  const mData = useSelector(({ contact: { data } }) => data);

  return (
    <ul>
      {mData.map((i, idx) => (
        <Item idx={idx} key={idx} contact={i} />
      ))}
    </ul>
  );
};

export default List;

// import React from "react";
// import Item from "./Item";
// import { connect} from "react-redux";

// const List = ({ mData }) => {
//   return (
//     <ul>
//       {mData.map((i, idx) => (
//         <Item idx={idx} key={idx} contact={i} />
//       ))}
//     </ul>
//   );
// };

// const mapStateProps = state => {
//   return { mData: state.data };
// };

// export default connect(mapStateProps)(List);
