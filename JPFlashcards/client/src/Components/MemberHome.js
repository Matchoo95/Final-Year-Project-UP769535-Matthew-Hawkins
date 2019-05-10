import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MemberAppBar from './MemberAppBar';

export class MemberHome extends Component {
  // home page for signed in users
  render() {
      return (
      <MuiThemeProvider>
        <React.Fragment>
          <MemberAppBar />
          <h1>Member's Area</h1>

          <h2><a href="/study">Click here to start studying!</a></h2>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default MemberHome;