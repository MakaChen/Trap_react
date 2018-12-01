import React from 'react';
import './App.css';
import Op from './container/Op';
import Reserve from './container/Reserve';
import User from './container/User';
import Home from './container/Home';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRedirect, browserHistory, IndexLink } from 'react-router';

import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger';
import serverApi from './middleware/serverApi'

const routes = [{
  path: '/',
  component: App,
  indexRoute: { component: Op },
  childRoutes: [
    { path: 'Op', component: Op },
    { path: 'Reserve', component: Reserve },
    { path: 'User', component: User },
    { path: 'Home', component: Home },
  ]
}]

const logger = createLogger();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, serverApi, logger)
  )
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
      </Provider>
    )
  }
}

