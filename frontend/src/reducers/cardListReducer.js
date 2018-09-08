import cardListActionTypes from '../actions/cardListAT';

const {
  FETCH_GIFTS_REQUEST,
  FETCH_GIFTS_SUCCESS,
  FETCH_GIFTS_FAILURE
} = cardListActionTypes;

const initialState = {
  loadedGifts: []
};

export default function cardList(state = initialState, action) {
  switch (action.type) {
    case FETCH_GIFTS_REQUEST:
      return {
        ...state,
        loadedGifts: []
      };
    case FETCH_GIFTS_SUCCESS:
      return {
        ...state,
        loadedGifts: action.payload
      };
    case FETCH_GIFTS_FAILURE:
      return state;
    default:
      return state;
  }
}