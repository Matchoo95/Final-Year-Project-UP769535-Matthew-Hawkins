import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MemberAppBar from './MemberAppBar';

export class MemberHome extends Component {
  render() {
      return (
      <MuiThemeProvider>
        <React.Fragment>
          <MemberAppBar />
            <h1>Your Flashcard Decks</h1>
            <p>Click on a deck to start studying, 
                or make a new deck and add your own 
                flashcards.
            </p>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default MemberHome;