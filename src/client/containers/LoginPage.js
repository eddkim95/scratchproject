
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
    createUser: (user, pass) => {
      dispatch(actions.createUser(user, pass));
    },
    verifyUser: (user, pass) => {
      dispatch(actions.verifyUser(user, pass));
    },
    addUsername: (username) => {
      dispatch(actions.addUsername(username));
    },
    addPassword: (password) => {
      dispatch(actions.addPassword(password));
    },
  }
}
  // create functions that will dispatch action creators


class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="LoginBox">
        <div></div>
        <label style = {{fontSize:18}}>Location:</label>
        <input type='text' onKeyUp={(event)=>{
          console.log(event.target.value);
          props.addUsername(event.target.value)
        }}></input>
        <input type='text' onKeyUp={(event)=>{
          console.log(event.target.value);
          props.addPassword(event.target.value)
        }}></input>
      <button type='button' onClick={props.verifyUser}>Login</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
