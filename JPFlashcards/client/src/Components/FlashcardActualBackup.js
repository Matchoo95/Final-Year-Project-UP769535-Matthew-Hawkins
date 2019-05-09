import React, { Component } from 'react';
import Card from '../Card/Card';
import TryAgainLaterButton from '../TryAgainLaterButton/TryAgainLaterButton';
import CorrectButton from '../CorrectButton/CorrectButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MemberAppBar from './MemberAppBar';
import firebase from 'firebase/app';
import 'firebase/database';
import { DB_CONFIG } from '../config/Firebase/db_config';

class Flashcard extends Component {
  constructor(props){
    super(props);
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('cards');
    this.updateCard = this.updateCard.bind(this);
    this.state = {
      cards: [],
      currentCard: {}
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;
    this.database.on('child_added', snap => {
      currentCards.push({
        id: snap.key, 
        jp: snap.val().jp,
        reading: snap.val().reading,
        meaning: snap.val().meaning,
        en: snap.val().en,
        due: snap.val().dueDate,
        lastReviewed: snap.val().dateLastReviewed,
        timesCorrectInRow: snap.val().consecutiveTimesCorrect, 
        difficultyRating: snap.val().difficulty,
        timeBetweenReviews: snap.val().daysBetweenReviews // In days
      })
      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })     
    })    
  }

  getDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; // Jan is 0
    var yyyy = today.getFullYear();

    if(dd < 10) {
      dd = '0' + dd
    }

    if(mm < 10) {
      mm = '0' + mm
    }

    today = dd + '/' + mm + '/' + yyyy;
    return(today);
  }

  getRandomCard(currentCards, today){
    while(currentCards.length > 0){
      if(currentCards.due === this.getDate(today)) {
        var card = currentCards[Math.floor(Math.random() * currentCards.length)]
        return(card);
      } else {
        return(<p>No more cards.</p>);
      }
    }
  }

  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return (      
    <MuiThemeProvider>
      <React.Fragment>
        <MemberAppBar />
          <div className="Flashcard">
            <div className="cardRow">
              <Card 
                id={this.state.currentCard.id}
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
