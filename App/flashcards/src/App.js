import React, { Component } from 'react';
import './App.css';
import { UserForm } from './Components/UserForm';
import MainAppBar from './Components/MainAppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {
  AppBar, Toolbar, Typography, Button, MenuList, MenuItem 
} from '@material-ui/core';
import Flashcard from './Components/Flashcard';
import ReactDOM from 'react-dom';
import { 
  Router, Route, Switch, Redirect, Link 
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainAppBar />
        <UserForm />
        <Router history={hist}>
          <Switch>
            <Route path={'/studysession'} component={Flashcard}/>
          </Switch>
        </Router> 
      </div>
    );
  }
}

export default App;