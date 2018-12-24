import { keyBy } from 'lodash';
import * as actionTypes from './actionTypes';

export function fetchAccount(payload) {
  return {type: actionTypes.FETCH_ONE, payload};
}

export function fetchAccountSuccess(payload) {
  const byId = {[payload.id]: payload};
  return {type: actionTypes.FETCH_ONE_SUCCESS, payload: {byId}};
}

export function fetchAccounts(payload) {
  return {type: actionTypes.FETCH_COLLECTION, payload};
}

export function fetchAccountsSuccess(accounts, params) {
  const byId = keyBy(accounts, (account) => account.id);
  return {type: actionTypes.FETCH_COLLECTION_SUCCESS, payload: {byId, params}};
}

export function createAccount(payload) {
  return {type: actionTypes.CREATE, payload};
}

export function createAccountSuccess(payload) {
  return {type: actionTypes.CREATE_SUCCESS, payload};
}

export function updateAccount(payload) {
  return {type: actionTypes.UPDATE, payload};
}

export function updateAccountSuccess(payload) {
  return {type: actionTypes.UPDATE_SUCCESS, payload};
}

export function deleteAccount(payload) {
  return {type: actionTypes.DELETE, payload};
}

export function deleteAccountSuccess(payload) {
  return {type: actionTypes.DELETE_SUCCESS, payload};
}
