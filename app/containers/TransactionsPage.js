import { Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Transactions from '../components/Transactions';
import * as Actions from '../actions/index';

function mapStateToProps(state) {
  return {
    transactions: state.account['fake-account'].transactions
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
