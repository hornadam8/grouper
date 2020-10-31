import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupsContainer from './containers/groupsContainer.js';
import GroupShowPage from './components/groupShowPage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { fetchGroups } from './actions/fetchGroups.js'



class App extends Component {

  componentDidMount(){
    this.props.fetchGroups()
    console.log('app.js')
  }
  render(){
    return(

        <div className='App'>
        <h1>Welcome to Grouper!</h1>
        <br/>
        <Switch>
          <Route exact path='/groups' render={(props)=><GroupsContainer {...props}/>}/>
          <Route path="/groups/:id" render={(props) => <GroupShowPage {...props} />} />
        </Switch>
    </div>
    );
  }
}

function mapStateToProps(state){
  return {
    groups: state.groups
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchGroups: () => dispatch(fetchGroups()),
    addGroup: formData => dispatch({type: 'ADD_GROUP', formData}),
    deleteGroup: id => dispatch({type: 'DELETE_GROUP', id})
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(App);
