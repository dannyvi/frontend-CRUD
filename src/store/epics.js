import { combineEpics } from 'redux-observable';
import { values } from 'lodash';

import * as accountsEpics from './accounts/epics';
import * as currencyEpics from './currency/epics';

export default combineEpics(
  ...values(accountsEpics),
  ...values(currencyEpics)
);
