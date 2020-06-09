import * as types from "../../actions/actionTypes";
import initialState from "../initialState";

export default function catReducer(state = initialState.cats, action) {
  switch (action.type) {
    case types.LOAD_CATS_SUCCESS:
      return action.cats;
    case types.LOAD_CAT_SUCCESS:
      return [...state, { ...action.cat }];
    case types.CREATE_CAT_SUCCESS:
      return [...state, { ...action.cat }];
    case types.DELETE_CAT_SUCCESS:
      return state.filter((cat) => cat.id !== action.cat.id);
    case types.UPDATE_CAT_SUCCESS:
      return state.map((cat) =>
        cat._id === action.cat.id ? action.cat : cat
      );
    case types.LOAD_CATS_NO_DATA_SUCCESS:
    default:
      return state;
  }
}
