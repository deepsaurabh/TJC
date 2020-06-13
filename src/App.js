import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import store, { history } from './store';

import Home from './screens/HomePage/HomePage';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import HomePage from './screens/HomePage/HomePage'
import About from './screens/About/About'
import Jobs from './screens/Jobs/Jobs'
import Blog from './screens/Blog/Blog'
import Contact from './screens/Contact/Contact'
import Login from './screens/Login/Login'
import Uploadcv from './screens/Uploadcv/Uploadcv'
import Register from './screens/Register/Register'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
          <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/jobs">
            <Jobs/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/uploadcv">
            <Uploadcv/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
