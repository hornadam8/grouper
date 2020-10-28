import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupsContainer from './containers/groupsContainer.js';




class App extends Component {
  render(){
    
    return(
        <div className='App'>

          <h1>Welcome to Grouper!</h1>
          <br/>
          <GroupsContainer/>
        </div>
    );
  }
}



export default App;
