import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import Confirm from './Confirm';
import Success from './Success';
import Flashcard from './Flashcard';


export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: ''
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

  render() {
        const { step } = this.state;
        const { firstName, lastName, email } = this.state;
        const values = { firstName, lastName, email }
    
        switch(step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep ={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <Confirm
                        nextStep ={this.nextStep}
                        previousStep={this.previousStep}
                        values={values}
                    />
                )
            case 3:
                return <Success />;
            case 4:
                return <Flashcard />;
            default:
            // do nothing
        }
    }   
}

export default UserForm
