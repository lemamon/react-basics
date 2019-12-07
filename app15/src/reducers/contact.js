import { data } from "./../components/data";
import Types from "../types/types";
const INITIAL_STATE = { data };

const contact = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.EDIT_CONTACT:
      return {
        ...state,
        data: state.data.map((item, idx) =>
          action.index === idx ? action.newData : item
        )
      };

    case Types.DELETE_CONTACT:
      return {
        ...state,
        data: state.data.filter((_, idx) => idx !== action.index)
      };

    case Types.ADD_CONTACT:
      return {
        ...state,
        data: [...state.data, action.newData]
      };

    default:
      return state;
  }
};

export default contact;
