import {Observable} from 'rxjs/Observable';

import * as actionTypes from './actionTypes';
import * as currencyActions from './actionCreators';

export function fetchCurrency(action$) {
  return action$.ofType(actionTypes.CURRENCY_FETCH)
    .map(action => action.payload)
    .switchMap(params => {
      return Observable.fromPromise(
        sdk.trades_latest_data_symbol("BITSTAMP_SPOT_ETH_USD", 20)
        //axios.get(`http://localhost:4000/currency?${querystring.stringify(params)}`)
      ).map(res => currencyActions.fetchCurrencySuccess(res.map(x => x.price)));

    });
}
