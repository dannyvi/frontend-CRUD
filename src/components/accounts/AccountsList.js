import React from 'react';
import { AccountsListRow } from './AccountsListRow';

export const AccountsList = ({accounts, onDelete}) => {
  return (
    <table className="table table-hover">
      <thead>
      <tr>
        <th>User</th>
        <th>amountInUsd</th>
        <th>currency</th>
        <th>date</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {accounts.map(account => AccountsListRow({account, onDelete}))}
      </tbody>
    </table>
  )
};
