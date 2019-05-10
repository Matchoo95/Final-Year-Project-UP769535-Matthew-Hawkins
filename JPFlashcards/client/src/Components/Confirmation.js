import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirmation extends Component {  
  // handle event to go back a step when raised button is pressed
  previous = e => {
    e.preventDefault();
    this.props.previousStep();
  }
  // render confirmation form and send data to server
  render() {
    const { values: { username, password, email } } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h1>Confirm User Details</h1>

          <form action="/user_create" method="POST">
              <h3>Username</h3>
              <input value={ username } name="create_username"></input>
              <br />
              <h3>Password</h3>
              <input value={ password } type="password" name="create_password"></input>
              <br />
              <h3>Email</h3>
              <input value={ email } name="create_email"></input>
              <br />
              <button>Submit</button>
          </form>

          <br />

          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.previous}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

// raised button styling
const styles = {
  button: {
    margin: 10
  }
}

export default Confirmation