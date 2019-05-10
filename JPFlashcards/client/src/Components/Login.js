import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Login extends Component {  
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h1>Enter Your Username and Password to Login</h1>

          <form action="/authenticateuser" method="POST">
              <h3>Username</h3>
              <input placeholder="Username" name="login_username"></input>
              <br />
              <h3>Password</h3>
              <input placeholder="Password" name="login_password"></input>
              <br />
              <button>Submit</button>
          </form>

          <p>Don't have an account? <a href="register">Register here.</a></p>

        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}


export default Login