import api from "../../services/api";
import { Types } from "../types/Types";

export const previousPage = (url) => {
  return async (dispatch) => {
    const characters = await api.getPages(url);
    dispatch({
        type:Types.characterPrev,
        payload: {
            results:characters.results, 
            next: characters.info.next,
            prev: characters.info.prev
        }
    })
  };
};

export const nextPage = (url) => {
    return async (dispatch) => {
      const characters = await api.getPages(url);
      dispatch({
          type:Types.characterNext,
          payload: {
            results:characters.results, 
            next: characters.info.next,
            prev: characters.info.prev
        }
      })
    };
  };

  export const characterList = () => {
    return async (dispatch) => {
      const characters = await api.getCharters();
      dispatch({
          type:Types.characterList,
          payload: {
              results:characters.results, 
              next: characters.info.next,
              prev: characters.info.prev
          }
    })}
  };