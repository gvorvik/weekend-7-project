import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';




class Submission extends Component {
  render() {
    return (
      <div>
          <h1>Hello Submission</h1>
          <Link to='/'>New Feedback</Link>
      </div>
    );
  }
}

export default connect()(Submission);