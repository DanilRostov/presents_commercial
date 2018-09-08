import cardListActionTypes from './cardListAT';
import { BASE_URL } from '../constants/API';

const {
  FETCH_START_GIFTS_REQUEST,
  FETCH_START_GIFTS_SUCCESS,
  FETCH_START_GIFTS_FAILURE,
  FETCH_MORE_GIFTS_REQUEST,
  FETCH_MORE_GIFTS_SUCCESS,
  FETCH_MORE_GIFTS_FAILURE
} = cardListActionTypes;

const fetchStartGiftsRequest = () => {
  return {
    type: FETCH_START_GIFTS_REQUEST,
    isLoading: true,
    isError: false
  }
};

const fetchStartGiftsSuccess = (gifts) => {
  return {
    type: FETCH_START_GIFTS_SUCCESS,
    gifts,
    isLoading: false,
    isError: false
  }
};

const fetchStartGiftsFailure = (err) => {
  return {
    type: FETCH_START_GIFTS_FAILURE,
    isLoading: false,
    isError: true,
    err
  }
};

export const fetchStartGifts = (params) => (dispatch) => {
  dispatch(fetchStartGiftsRequest());
  fetch(`${BASE_URL}/${params.giftsType}?start=${params.start}&limit=${params.limit}`)
    .then(data => data.json())
    .then(gifts => dispatch(fetchStartGiftsSuccess(gifts)))
    .catch(err => dispatch(fetchStartGiftsFailure(err)))
}

const fetchMoretGiftsRequest = () => {
  return {
    type: FETCH_MORE_GIFTS_REQUEST,
    isLoading: true,
    isError: false
  }
};

const fetchMoretGiftsSuccess = (gifts) => {
  return {
    type: FETCH_MORE_GIFTS_SUCCESS,
    gifts,
    isLoading: false,
    isError: false
  }
};

const fetchMoretGiftsFailure = (err) => {
  return {
    type: FETCH_MORE_GIFTS_FAILURE,
    isLoading: false,
    isError: true,
    err
  }
};

export const fetchMoreGifts = (params) => (dispatch) => {
  dispatch(fetchMoretGiftsRequest());
  fetch(`${BASE_URL}/${params.giftsType}?start=${params.start}&limit=${params.limit}`)
    .then(data => data.json())
    .then(gifts => dispatch(fetchMoretGiftsSuccess(gifts)))
    .catch(err => dispatch(fetchMoretGiftsFailure(err)))
}