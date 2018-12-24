import * as actionTypes from './actionTypes';


export function fetchCurrency(payload) {
  return {type: actionTypes.CURRENCY_FETCH, payload};
}

export function fetchCurrencySuccess(payload) {

  return {type: actionTypes.CURRENCY_FETCH_SUCCESS, payload: payload};
}
