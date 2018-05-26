import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Import Components
import Feeling from '../feeling/feeling';
import Content from '../content/content';
import Support from '../support/support';
import Comments from '../comments/comments';
import Submission from '../submission/submission';
import Admin from '../admin/admin';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
            <Route exact path='/' component={Feeling} />
            <Route exact path='/content' component={Content} />
            <Route exact path='/support' component={Support} />
            <Route exact path='/comments' component={Comments} />
            <Route exact path='/submission' component={Submission} />
            <Route exact path='/admin' component={Admin} />
          </header>
          <br />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
