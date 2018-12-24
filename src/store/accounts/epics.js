import axios from 'axios';
import querystring from 'querystring';
import {Observable} from 'rxjs/Observable';
import {push} from 'react-router-redux';

import * as actionTypes from './actionTypes';
import * as accountsActions from './actionCreators';

export function fetchAccount(action$) {
  return action$.ofType(actionTypes.FETCH_ONE)
    .map(action => action.payload)
    .switchMap(id => {
      return Observable.fromPromise(
        axios.get(`http://localhost:4000/accounts/${id}`)
      ).map(res => accountsActions.fetchAccountSuccess(res.data));

    });
}

export function fetchAccounts(action$) {
  return action$.ofType(actionTypes.FETCH_COLLECTION)
    .map(action => action.payload)
    .switchMap(params => {
      return Observable.fromPromise(
        axios.get(`http://localhost:4000/accounts?${querystring.stringify(params)}`)
      ).map(res => accountsActions.fetchAccountsSuccess(res.data, params));
    });
}

export function updateAccount(action$) {
  return action$.ofType(actionTypes.UPDATE)
    .map(action => action.payload)
    .switchMap(account => {
      return Observable.merge(
        Observable.fromPromise(
          axios.put(`http://localhost:4000/accounts/${account.id}`, account)
        ).map(res => accountsActions.updateAccountSuccess(res.data)),
        Observable.of(push('/accounts'))
      );
    });
}

export function createAccount(action$) {
  return action$.ofType(actionTypes.CREATE)
    .map(action => action.payload)
    .switchMap(account => {
      return Observable.merge(
        Observable.fromPromise(
          axios.post(`http://localhost:4000/accounts`, account)
        ).map(res => accountsActions.createAccountSuccess(res.data)),
        Observable.of(push('/accounts'))
      );
    });
}

export function deleteAccount(action$) {
  return action$.ofType(actionTypes.DELETE)
    .map(action => action.payload)
    .switchMap(account => {
      return Observable.fromPromise(
        axios.delete(`http://localhost:4000/accounts/${account.id}`)
      ).map(res => accountsActions.deleteAccountSuccess(account));
    });
}
