import Immutable from 'seamless-immutable';
import * as actionTypes from './actionTypes';

const initialState = Immutable({

});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CURRENCY_FETCH_SUCCESS:
      return {
        data: action.payload ||  [...Array(20).keys()],

      };
    default:
      return state;
  }
};