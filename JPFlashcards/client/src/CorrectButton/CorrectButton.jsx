import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class CorrectButton extends Component{
    constructor(props){
        super(props);
        this.newCard = this.newCard.bind(this);
    }

    newCard(){
        this.props.newCard();
    }

    render(props){
        return(
            <div className="buttonContainer">
                <button className="btn" onClick={this.newCard}>Correct</button>
            </div>
        )
    }
}

export default CorrectButton