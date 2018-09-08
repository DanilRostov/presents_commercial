import cardListActionTypes from './cardListAT';
import { BASE_URL } from '../constants/API';

const {
  FETCH_GIFTS_REQUEST,
  FETCH_GIFTS_SUCCESS,
  FETCH_GIFTS_FAILURE
} = cardListActionTypes;

const fetchGiftsRequest = () => {
  return {
    type: FETCH_GIFTS_REQUEST,
    isLoading: true,
    isError: false
  }
};

const fetchGiftsSuccess = (gifts) => {
  return {
    type: FETCH_GIFTS_SUCCESS,
    payload: gifts,
    isLoading: false,
    isError: false
  }
};

const fetchGiftsFailure = (err) => {
  return {
    type: FETCH_GIFTS_FAILURE,
    isLoading: false,
    isError: true,
    err
  }
};

export const fetchGifts = (params) => (dispatch) => {
  dispatch(fetchGiftsRequest());
  fetch(`${BASE_URL}/${params.giftsType}?start=${params.start}&limit=${params.limit}`)
    .then(data => data.json())
    .then(gifts => dispatch(fetchGiftsSuccess(gifts)))
    .catch(err => dispatch(fetchGiftsFailure(err)))
}