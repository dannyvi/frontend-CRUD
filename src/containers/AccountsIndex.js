import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router';
import {AccountsList} from '../components/accounts/AccountsList';
import {SearchInput} from '../components/shared/SearchInput';
import {accountsActions, accountsSelectors} from '../store/accounts/index';

@connect(
  (state) => {
    return {
      params: accountsSelectors.getParams(state),
      accounts: accountsSelectors.getAccounts(state),
    };
  }
)
export class AccountsIndex extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.deleteAccount = this.deleteAccount.bind(this);
    this.handleSearch = this.handleSearch.bind(this, 'title_like');
  }

  componentDidMount() {
    this.fetchAccounts({});
  }

  fetchAccounts(params) {
    this.context.store.dispatch(accountsActions.fetchAccounts(params));
  }

  deleteAccount(account) {
    this.context.store.dispatch(accountsActions.deleteAccount(account));
  }

  handleSearch(field, value) {
    this.fetchAccounts({q: value})
  }

  render() {
    const {
      params,
      accounts,
    } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <SearchInput
              value={params.q}
              onSearch={this.handleSearch}
              placeholder="Search ..."
            />
          </div>
          <div className="col-md-6 text-right">
            <Link to="/accounts/new" className="btn btn-primary">New Account</Link>
          </div>
        </div>
        {accounts.length > 0 &&
        <AccountsList accounts={accounts} onDelete={this.deleteAccount}/>}
      </div>
    );
  }
}
