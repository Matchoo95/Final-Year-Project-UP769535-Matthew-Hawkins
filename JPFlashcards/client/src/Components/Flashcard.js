import React, { Component } from 'react';
import Card from '../Card/Card';
import TryAgainLaterButton from '../TryAgainLaterButton/TryAgainLaterButton';
import CorrectButton from '../CorrectButton/CorrectButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MemberAppBar from './MemberAppBar';


class Flashcard extends Component {
  constructor(props) {
    super(props);
    this.updateCard = this.updateCard.bind(this);
    this.state = {
      cards: [],
      currentCard: {}    
    };
}; 

  componentWillMount(){
    let data = {
      id: this.state.currentCard.id,
      jp: this.state.currentCard.jp,
      reading: this.state.currentCard.reading,
      meaning: this.state.currentCard.meaning,
      en: this.state.currentCard.en      
    };
    fetch("/getalljpflashcards", {
      method: "POST",
      body: data
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        this.setState(() => ({
          cards: responseJson,
          currentCard: this.getRandomCard(responseJson)
        }));       
      })
      .catch(err => {
        console.log("Error: " + err);
      }); 
  }

  getRandomCard(responseJson){
    var randomIndex = Math.floor(Math.random() * responseJson.length);
    var card = responseJson[randomIndex];
    if(card === this.state.currentCard){
      this.getRandomCard(responseJson)
    }
    return(card);
  }

  updateCard(){
    console.log("NEW CARD");
 //   const currentCards = this.state.cards;
 //   this.setState({
 //     currentCard: this.getRandomCard(currentCards)
 //   })
  }

  render() {
    return (      
    <MuiThemeProvider>
      <React.Fragment>
        <MemberAppBar />
          <div className="Flashcard">
            <div className="cardRow">
              <Card 
                jp={this.state.currentCard.jp}
                reading={this.state.currentCard.reading}
                meaning={this.state.currentCard.meaning}
                en={this.state.currentCard.en}       
                />
              </div>
              <div className="buttonRow">
                <TryAgainLaterButton newCard={this.updateCard}/>
                <CorrectButton newCard={this.updateCard}/>
              </div>
           </div>      
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Flashcard;
