import React from 'react';
import { Link } from 'react-router';

export const AccountsListRow = ({account, onDelete}) => {
  return (
    <tr key={account.id}>
      <td>{account.user.name + " " + account.user.surname}</td>
      <td>{account.amountInUsd}</td>
      <td>{account.currency}</td>
      <td>{account.date}</td>
      <td>
        <div className="btn-toolbar pull-right">
          <Link to={`/accounts/${account.id}`} className="btn btn-primary">Edit</Link>
          <a onClick={onDelete.bind(this, account)} className="btn btn-danger">Delete</a>
        </div>
      </td>
    </tr>
  )
};
