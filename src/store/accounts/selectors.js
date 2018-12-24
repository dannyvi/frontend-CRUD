export function getParams(state) {
  return state.accounts.params;
}

export function getAccount(state, id) {
  return state.accounts.byId[id];
}

export function getAccounts(state) {
  return Object.values(state.accounts.byId);
}
