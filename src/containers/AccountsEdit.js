import React from 'react';
import {accountsActions, accountsSelectors} from '../store/accounts/index';
import {connect} from 'react-redux';
import {isEqual} from 'lodash';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


@connect(
  (state, props) => {
    return {
      account: accountsSelectors.getAccount(state, props.params.accountId),
    };
  }
)
export class AccountsEdit extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object
  };

  static propTypes = {
    params: React.PropTypes.object,
    account: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      ...this.state,

      accountId: this.props.params.accountId,
      account: {user: {name:'', surname:''}, amountInUsd: '', currency:'',
        date: (new Date()).toISOString().split('T')[0]}
    };
    this.handleDayChange= this.handleDayChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.account, this.state.account)) {
      this.setState({...this.state, account: nextProps.account});
    }
  }

  componentDidMount() {
    if (this.state.accountId) {
      this.context.store.dispatch(accountsActions.fetchAccount(this.props.params.accountId));
    }
  }

  handleChange(field, e) {
    const account = Object.assign({}, this.state.account, {[field]: e.target.value});
    this.setState(Object.assign({}, this.state, {account}));
  }


  handleUserChange(field, e) {
    let user = Object.assign({}, this.state.account['user']);
    user[field]=e.target.value;
    const account = Object.assign({}, this.state.account, {['user']: user});
    this.setState(Object.assign({}, this.state, {account}));
  }

  handleDayChange(selectedDay, modifiers, dayPickerInput) {
    const input = dayPickerInput.getInput();

    const account = Object.assign({}, this.state.account, {["date"]: input.value});
    this.setState(Object.assign({}, this.state, {account}));
  }

  handleSubmit() {
    if (this.state.accountId) {
      this.context.store.dispatch(accountsActions.updateAccount(this.state.account));
    } else {
      this.context.store.dispatch(accountsActions.createAccount(this.state.account));
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} noValidate >
        <div className="form-group">
          <label className="control-label">user</label>
          <div className="row form-control-inline">

        <div className="col-md-6 row-no-gutters">
        <div className="form-group">
            <label className="control-label">name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.account.user.name}
              onChange={this.handleUserChange.bind(this, 'name')} />
        </div>
        </div>
        <div className="col-md-6 row-no-gutters">
        <div className="form-group">
            <label className="control-label">surname</label>
            <input
              type="text"
              className="form-control"
              value={this.state.account.user.surname}
              onChange={this.handleUserChange.bind(this, 'surname')} />

        </div>
        </div>
          </div>
        </div>

        <div className="form-group">
          <label className="label-control">amountInUsd</label>
          <input
            className="form-control"
            value={this.state.account.amountInUsd}
            onChange={this.handleChange.bind(this, 'amountInUsd')} />
        </div>

        <div className="form-group">
          <label className="label-control">currency</label>
          <input
            className="form-control"
            value={this.state.account.currency}
            onChange={this.handleChange.bind(this, 'currency')} />
        </div>

        <div className="form-group">
          <label className="label-control">date</label>
          <div >
            <DayPickerInput value={this.state.account.date}
                            selectedDay={this.state.account.date}
                            onDayChange={this.handleDayChange} />
          </div>
        </div>

        <button type="submit" className="btn btn-default">
          {this.state.accountId ? 'Update' : 'Create' } Account
        </button>
      </form>
    );
  }
}
