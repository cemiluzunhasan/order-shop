import types from "./action-types";
import { set } from "lodash";

const reducer = (state = {}, action) => {
  const { type, key, data, error, id } = action;

  switch (type) {
    case types.GLOBAL_REQUEST:
      set(state, `${key}`, { ...state[key], loading: true, data: null, error: null });
      return { ...state };
    case types.GLOBAL_SUCCESS:
      set(state, `${key}`, { ...state[key], loading: false, data, error: null });
      return { ...state };
    case types.GLOBAL_ERROR:
      set(state, `${key}`, { ...state[key], loading: false, data: null, error });
      return { ...state };
    case types.DELETE_DATA:
      return { ...state, [key]: { ...state[key], data: state[key].data.filter(x => x.id !== id) } };
    default:
      return { ...state };
  }
}

export default reducer;