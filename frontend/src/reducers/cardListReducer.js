import cardListActionTypes from '../actions/cardListAT';

const {
  FETCH_START_GIFTS_REQUEST,
  FETCH_START_GIFTS_SUCCESS,
  FETCH_START_GIFTS_FAILURE,
  FETCH_MORE_GIFTS_REQUEST,
  FETCH_MORE_GIFTS_SUCCESS,
  FETCH_MORE_GIFTS_FAILURE
} = cardListActionTypes;

export default function cardList(state = { loadedGifts: []}, { type, gifts }) {
  switch (type) {
    case FETCH_START_GIFTS_REQUEST:
      return {
        ...state
      };
    case FETCH_START_GIFTS_SUCCESS:
      return {
        ...state,
        loadedGifts: gifts
      };
    case FETCH_START_GIFTS_FAILURE:
      return state;
    case FETCH_MORE_GIFTS_REQUEST:
      return {
        ...state
      };
    case FETCH_MORE_GIFTS_SUCCESS:
      return {
        ...state,
        loadedGifts: [...state.loadedGifts, ...gifts]
      };
    case FETCH_MORE_GIFTS_FAILURE:
      return state;
    default:
      return state;
  }
}