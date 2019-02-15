import React, { Component } from 'react';
import '../App.css';
import Card from '../Card/Card';
import TryAgainLaterButton from '../TryAgainLaterButton/TryAgainLaterButton';
import CorrectButton from '../CorrectButton/CorrectButton';
import firebase from 'firebase/app';
import 'firebase/database';
import { DB_CONFIG } from '../config/Firebase/db_config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

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
      })
      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })     
    })    
  }

  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return (
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
    );
  }
}

export default Flashcard;
