import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';




class Feeling extends Component {
  render() {
    return (
      <div>
          <h1>Hello Feelings</h1>
          <Link to='/content'>Next Page</Link>
      </div>
    );
  }
}

export default connect()(Feeling);