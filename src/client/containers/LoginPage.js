
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions.js';
// import child components if necessary

const mapStateToProps = store => ({
  // provide pertinent state here
  userName: store.userName,
  password: store.password,
});

const mapDispatchToProps = dispatch => {
  return {
    createUser: () => {
      dispatch(actions.createUser());
    },
    verifyUser: () => {
      dispatch(actions.verifyUser());
    },
    addUsername: () => {
      dispatch(actions.addUsername());
    },
    addPassword: () => {
      dispatch(actions.addPassword());
    },
  }
}
  // create functions that will dispatch action creators


class MarketsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="innerbox">
        <MarketCreator addMarket={this.props.addMarket} setNewLocation={this.props.setNewLocation}/>
        <MarketsDisplay marketList={this.props.marketList} addCard={this.props.addCard} deleteCard={this.props.deleteCard} totalCards={this.props.totalCards}/>
        { /* add components here... */ }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
