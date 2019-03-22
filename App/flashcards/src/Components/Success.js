import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


export class Success extends Component {
  continue = e => {
    e.preventDefault();

    // PROCESS DATA FROM FORM

    this.props.nextStep();
  }
  
  previous = e => {
    e.preventDefault();
    this.props.previousStep();
  }
  
  render() {
      return (
      <MuiThemeProvider>
        <React.Fragment>
            <h1>Account Created Successfully!</h1>
            <p>Your account has been created but before you can
                 use it you will need to verify your account.
                  An email has been sent to you with further instructions.
            </p>


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

export default Success