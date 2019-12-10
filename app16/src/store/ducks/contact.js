import { createActions, createReducer } from "reduxsauce";
import { data } from "./../../components/data";
const INITIAL_STATE = { data };

export const { Types, Creators } = createActions({
  addContact: ["newData"],
  editContact: ["index", "newData"],
  deleteContact: ["index"]
});

const editContact = (state = INITIAL_STATE, action) => ({
  ...state,
  data: state.data.map((item, idx) =>
    action.index === idx ? action.newData : item
  )
});

const deleteContact = (state = INITIAL_STATE, action) => ({
  ...state,
  data: state.data.filter((_, idx) => idx !== action.index)
});

const addContact = (state = INITIAL_STATE, action) => ({
  ...state,
  data: [...state.data, action.newData]
});

export default createReducer(INITIAL_STATE, {
  [Types.ADD_CONTACT]: addContact,
  [Types.EDIT_CONTACT]: editContact,
  [Types.DELETE_CONTACT]: deleteContact
});
