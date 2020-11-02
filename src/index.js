import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import groupsReducer from './reducers/groupsReducer.js';
import postsReducer from './reducers/postsReducer.js';
import commentsReducer from './reducers/commentsReducer.js'
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router
} from 'react-router-dom';


const rootReducer = combineReducers({
  groups: groupsReducer,
  posts: postsReducer,
  comments: commentsReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>

  </Provider>,

  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
