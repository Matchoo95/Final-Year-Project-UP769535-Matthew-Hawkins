import React, { Component } from 'react';

// Create correct button for flashcard
class CorrectButton extends Component{
    constructor(props){
        super(props);
        this.newCard = this.newCard.bind(this);
    }
    newCard(){
        this.props.newCard();
    }
    // render button
    render(props){
        return(
            <div className="buttonContainer">
                <button className="btn" onClick={this.newCard}>Correct</button>
            </div>
        )
    }
}

export default CorrectButton