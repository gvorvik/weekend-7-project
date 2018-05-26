import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Import Components
import Feeling from '../feeling/feeling';
import Content from '../content/content';
import Support from '../support/support';
import Comments from '../comments/comments';
import Submission from '../submission/submission';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <Feeling />
          <Content />
          <Support />
          <Comments />
          <Submission />
        </header>
        <br/>
      </div>
    );
  }
}

export default connect()(App);
