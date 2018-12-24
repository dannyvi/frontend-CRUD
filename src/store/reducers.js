import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import accounts from './accounts/reducer';
import currency from './currency/reducer';

export default combineReducers({
  accounts,
  currency,
  routing: routerReducer,
});
