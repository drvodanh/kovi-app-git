import { SET_SEARCH_INPUT, ADD_SEARCH_INPUT } from "./constants";

export const setSearchInput = (payload) => ({
  type: SET_SEARCH_INPUT,
  payload,
});

export const addSearchInput = (payload) => ({
  type: ADD_SEARCH_INPUT,
  payload,
});
