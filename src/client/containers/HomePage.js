
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import child components if necessary

const mapStateToProps = store => ({
  // provide pertinent state here
  username: store.addUsername,
  password: store.addPassword,
});

const mapDispatchToProps = (dispatch) => {
  return {
    verifyUser: (user, pw) => {
      dispatch(actions.verifyUser({ username: user, password: pw }));
    },
    addUsername: (event) => {
      dispatch(actions.addUsername(event.target.value));
    },
    addPassword: (event) => {
      dispatch(actions.addPassword(event.target.value));
    },
    togglePage: () => {
      dispatch(actions.togglePage());
    }
  };
};
  // create functions that will dispatch action creators


class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { username, password, verifyUser, addUsername, addPassword, togglePage } = this.props;
    return(
      <div className="LoginBox">
        <label style = {{fontSize:18}}>HOME PAGE</label>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);