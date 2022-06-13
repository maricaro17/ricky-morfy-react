import { Types } from "../types/Types";

const initialState = {
  results: [],
  next: null,
  prev: null,
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.characterList:
    case Types.characterPrev:
    case Types.characterNext:
      return action.payload;
    default:
      return state;
  }
};
