import React, { Component } from 'react';
import UserDetails from './UserDetails';
import Confirmation from './Confirmation';

// register form that increments in steps
export class Register extends Component {
    state = {
        step: 1,
        username: null,
        password: null,
        email: null,
    }

    // Go to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to previous step
    previousStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    // based on current step, decide what to do
    render() {
        // create fields for transfer between sections
        const { step } = this.state;
        const { username, password, email } = this.state;
        const values = { username, password, email };
    
        switch(step) {
            case 1:
            // load user details page
                return (
                    <UserDetails
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 2:
            // load confirmation page bringing fields across
                return (
                    <Confirmation
                        nextStep = {this.nextStep}
                        previousStep = {this.previousStep}
                        values = {values}
                    />
                )
            default:
            // do nothing
        }
    }   
}

export default Register