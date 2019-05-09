import React, { Component } from 'react';
import '../Styles/ButtonStyles.css';
import RaisedButton from 'material-ui/RaisedButton';

class TryAgainLaterButton extends Component{
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
                <button className="btn" onClick={this.newCard}>Try Again Later</button>
            </div>
        )
    }
}

export default TryAgainLaterButton