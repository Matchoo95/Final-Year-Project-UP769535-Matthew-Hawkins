import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class UserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h1>Create a New Account</h1>

          <p>Please provide the following information to create your new account.</p>
          <p>If you already have an account, you can login from the menu.</p>
          
          <TextField
            hintText="Enter Your Desired Username"
            floatingLabelText="Username"
            onChange={handleChange('Username')}
            defaultValue={values.username}
          />

          <br/>

          <TextField
            hintText="Enter Your Desired Password"
            floatingLabelText="Password"
            onChange={handleChange('password')}
            defaultValue={values.password}
          />

          <br/>

          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />

          <br />

          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}          
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 10
  }
}

export default UserDetails
