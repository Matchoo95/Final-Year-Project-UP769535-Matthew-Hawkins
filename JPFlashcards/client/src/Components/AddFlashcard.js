import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MemberAppBar from './MemberAppBar';

export class AddFlashcard extends Component {  
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <MemberAppBar />
          <h1>Fill in the sections to add a new flashcard to your collection!</h1>

          <form action="/createnewflashcard" method="POST">
              <h3>Japanese Text</h3>
              <textarea rows="4" cols="50" placeholder="Japanese" name="add_flashcard_japanese"></textarea >
              <br />
              <h3>Japanese Reading/Pronunciation</h3>
              <textarea rows="4" cols="50" placeholder="Reading" name="add_flashcard_reading"></textarea >
              <br />
              <h3>Meaning</h3>
              <textarea rows="4" cols="50" placeholder="Meaning" name="add_flashcard_meaning"></textarea >
              <br />
              <h3>English Translation</h3>
              <textarea rows="4" cols="50" placeholder="English" name="add_flashcard_english"></textarea >
              <br />
              <h5>Deck</h5>
              <input placeholder="Deck" value="1" name="add_flashcard_deck"></input >
              <br />
              <h5>User</h5>
              <input placeholder="User" value="3" name="add_flashcard_current_user"></input >
              <br />
              <button>Submit</button>
          </form>

        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}


export default AddFlashcard