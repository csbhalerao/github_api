import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from "./reducers/index.js";
import './index.css';
import GProfile from './container/github_profile_container.js';
import {Provider} from "react-redux";

let store = createStore(reducers, applyMiddleware(thunk))

class App extends React.Component {
  render() {
    return (
      <GProfile></GProfile>
    )
  }
}

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
);
