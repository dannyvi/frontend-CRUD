import React from 'react';
import ReactDOM from 'react-dom';
import { AccountsListRow } from './components/accounts/AccountsListRow';


it('renders without crashing', () => {
  const account = {
    "user": {
      "name": "dadadada",
      "surname": "uvuvu"
    },
    "amountInUsd": "9999000",
    "currency": "5.60000",
    "date": "2018-12-23",
    "id": 8
  };
  const div = document.createElement('div');
  ReactDOM.render(<AccountsListRow account={account} onDelete={()=> null}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});