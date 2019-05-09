import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Home extends Component {  
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Welcome to JP Flashcards</h1>
                    </div>
                </div>
            </div>
            <p>This is a flashcard web app that allows you to study Japanese with help of spaced repetition and comprehensible input.</p>
            <br />
            <p>Click register to create an account or login if you already have an account!</p>
            <br />
            <p>Don't have an account? <a href="register">Register here.</a></p>

        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Home