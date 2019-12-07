import { data } from "./../components/data";

const createStore = reducer => {
  let state = { data };

  let subscribers = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    subscribers.map(sub => sub());
  };

  const subscribe = callback => {
    subscribers.push(callback);
  };

  return {
    getState,
    dispatch,
    subscribe
  };
};

const reducer = (state, action) => {
  if (action.type === "EDIT_CONTACT") {
    return {
      ...state,
      data: state.data.map((item, idx) =>
        action.index === idx ? action.newData : item
      )
    };
  }

  if (action.type === "DELETE_CONTACT") {
    return {
      ...state,
      data: state.data.filter((_, idx) => idx !== action.index)
    };
  }

  return state;
};

const store = createStore(reducer);
export default store;
