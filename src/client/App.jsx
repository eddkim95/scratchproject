import React from 'react';
import LoginPage from './containers/LoginPage';

class App extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div>
          <LoginPage />
        </div>
      )
    }
  }
  
  export default App;