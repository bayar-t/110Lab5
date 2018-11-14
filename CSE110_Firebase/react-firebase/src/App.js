import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from './components/TeamMembers.js';
import DisplayData from './components/DisplayData.js';
import firebase from 'firebase'


class App extends Component {
    constructor(props) {
        super(props);

        var config = {
            apiKey: "AIzaSyCTLp7UNF95-igI5Y_WnR40zMBWb_d9GnI",
            authDomain: "cse110firebase-f4c3b.firebaseapp.com",
            databaseURL: "https://cse110firebase-f4c3b.firebaseio.com",
            projectId: "cse110firebase-f4c3b",
            storageBucket: "cse110firebase-f4c3b.appspot.com",
            messagingSenderId: "922018587433"
        };
        firebase.initializeApp(config);
    }
  render() {
      return(
          <div>
            <TeamMembers db={firebase}/>.
            <DisplayData db={firebase}/>
          </div>


    );
  }
}

export default App;
