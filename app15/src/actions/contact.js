import Types from "../types/types";

export const edit = idx => ({
  type: Types.EDIT_CONTACT,
  index: idx,
  newData: { name: "Fulano", email: "Fulano@email.com" }
});

export const deleteItem = idx => ({
  type: Types.DELETE_CONTACT,
  index: idx
});
