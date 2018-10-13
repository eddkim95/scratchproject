import React from 'react';
import { connect } from 'react-redux';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import HomePage from './containers/HomePage';



const mapStateToProps = store => ({
  // provide pertinent state here
  currentPage: store.currentPage,
});

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

class App extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let currPage;
      switch(this.props.currentPage) {
        case 'login':
            currPage = <LoginPage />;
            break;
        case 'signup':
            currPage = <SignUpPage />;
            break;
        case 'home':
            currPage = <HomePage />;
            break;
        default:
            currPage = <LoginPage />;
            break;
      }
      
      return(
        <div>
          {currPage}
        </div>
      )
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(App);
