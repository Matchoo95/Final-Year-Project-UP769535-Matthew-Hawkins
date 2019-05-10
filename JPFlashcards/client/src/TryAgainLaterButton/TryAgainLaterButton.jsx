import React, { Component } from 'react';
import '../Styles/ButtonStyles.css';

// create try again button
class TryAgainLaterButton extends Component{
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
                <button className="btn" onClick={this.newCard}>Try Again Later</button>
            </div>
        )
    }
}

export default TryAgainLaterButton