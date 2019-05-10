import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Success extends Component {
  render() {
      return (
        // default study home page
      <MuiThemeProvider>
        <React.Fragment>
            <h1>Account Created Successfully!</h1>
            <p>Your account has been created successfully! Start learning by clicking the "Study" button in the top left.
            </p>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}


export default Success