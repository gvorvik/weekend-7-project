import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';



class Support extends Component {
  render() {
    return (
      <div>
          <h1>Hello Support</h1>
      </div>
    );
  }
}

export default connect()(Support);