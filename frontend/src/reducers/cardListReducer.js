import cardListActionTypes from '../actions/cardListAT';

const {
  FETCH_START_GIFTS_REQUEST,
  FETCH_START_GIFTS_SUCCESS,
  FETCH_START_GIFTS_FAILURE,
  FETCH_MORE_GIFTS_REQUEST,
  FETCH_MORE_GIFTS_SUCCESS,
  FETCH_MORE_GIFTS_FAILURE
} = cardListActionTypes;

export default function cardList(state = { loadedGifts: []}, { type, isLoading, isError, gifts }) {
  switch (type) {
    case FETCH_START_GIFTS_REQUEST:
      return {
        ...state,
        isLoading,
        isError
      };
    case FETCH_START_GIFTS_SUCCESS:
      return {
        ...state,
        isLoading,
        isError,
        loadedGifts: gifts
      };
    case FETCH_START_GIFTS_FAILURE:
      return {
        state,
        isLoading,
        isError
      };
    case FETCH_MORE_GIFTS_REQUEST:
      return {
        ...state,
        isLoading,
        isError
      };
    case FETCH_MORE_GIFTS_SUCCESS:
      return {
        ...state,
        isLoading,
        isError,
        loadedGifts: [...state.loadedGifts, ...gifts]
      };
    case FETCH_MORE_GIFTS_FAILURE:
      return {
        state,
        isLoading,
        isError
      };
    default:
      return state;
  }
}