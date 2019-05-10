import React, { Component } from 'react';
import './App.css';
import Register from './Components/Register';
import Success from './Components/Success';
import Home from './Components/Home';
import MainAppBar from './Components/MainAppBar';
import Flashcard from './Components/Flashcard';
import Login from './Components/Login';
import MemberHome from './Components/MemberHome';
import AddFlashcard from './Components/AddFlashcard';
import { 
  Router, Route
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

// save history for use with routes
const hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      // start front end and assign route paths
      <div className="App">
        <MainAppBar />   
        <Router history={hist}>
            <Route exact path="/" component={Home} />
            <Route path={'/study'} component={Flashcard}/>
            <Route path={'/register'} component={Register}/>
            <Route path={'/home'} component={Home}/>
            <Route path={'/success'} component={Success}/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/memberhome'} component={MemberHome}/>
            <Route path={'/addflashcard'} component={AddFlashcard}/>
        </Router> 
      </div>
    );
  }
}

export default App;