import * as types from "../../actions/actionTypes";
import initialState from "../initialState";

export default function dogReducer(state = initialState.dogs, action) {
  switch (action.type) {
    case types.LOAD_DOGS_SUCCESS:
      return action.dogs;
    case types.LOAD_DOG_SUCCESS:
      return [...state, { ...action.dog }];
    case types.CREATE_DOG_SUCCESS:
      return [...state, { ...action.dog }];
    case types.DELETE_DOG_SUCCESS:
      return state.filter((dog) => dog.id !== action.dog.id);
    case types.UPDATE_DOG_SUCCESS:
      return state.map((dog) =>
        dog._id === action.dog.id ? action.dog : dog
      );
    case types.LOAD_DOGS_NO_DATA_SUCCESS:
    default:
      return state;
  }
}