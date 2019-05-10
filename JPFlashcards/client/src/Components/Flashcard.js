import React, { Component } from 'react';
import Card from '../Card/Card';
import TryAgainLaterButton from '../TryAgainLaterButton/TryAgainLaterButton';
import CorrectButton from '../CorrectButton/CorrectButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MemberAppBar from './MemberAppBar';


class Flashcard extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentCard: {},
      loading: false,    
    };
    this.updateCard = this.updateCard.bind(this);
  }; 
  componentWillMount(){
    const currentCards = this.state.cards;
    // push flashcards from db onto currentCards
    currentCards.push({
      id: this.state.currentCard.idUser,
      jp: this.state.currentCard.japaneseText,
      reading: this.state.currentCard.readingText,
      meaning: this.state.currentCard.meaningText,
      en: this.state.currentCard.englishText    
    });
    // get flashcards
    fetch("http://localhost:5000/getalljpflashcards", {
      method: "POST",
      body: currentCards
    })
    // return response as json
    .then(res => {
      return res.json();
    })
    .then(responseJson => {
      console.log(responseJson)
      // set state
      this.setState(() => ({
        cards: responseJson,
        currentCard: this.getRandomCard(responseJson)
      }));       
    })
    // catch any errors
    .catch(err => {
      console.log("Error: " + err);
    }); 
  }
  // get 1 random card
  getRandomCard(currentCard){
    var randomIndex = Math.floor(Math.random() * currentCard.length);
    var card = currentCard[randomIndex];
    if(card === this.state.currentCard && currentCard.length > 1){
      console.log(currentCard)
      this.getRandomCard(currentCard)
    }
    return(card);
  }

  // update state
  updateCard(){
    this.setState({loading: true},()=>{
      const currentCards = this.state.cards;
      this.setState({loading: false,
        currentCard: this.getRandomCard(currentCards)
      },()=>{console.log(this.state.currentCard)})
    })
  }

  render() {
    // render a Card with the current card's properties and flashcard animation
    return (      
    <MuiThemeProvider>
      <React.Fragment>
        <MemberAppBar />
          <div className="Flashcard">
            <div className="cardRow">
            { !this.state.loading ?            
              <Card 
                jp={this.state.currentCard.japaneseText}
                reading={this.state.currentCard.readingText}
                meaning={this.state.currentCard.meaningText}
                en={this.state.currentCard.englishText}       
                />
                : null
            }
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
