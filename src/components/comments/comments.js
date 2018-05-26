import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';




class Comments extends Component {
  render() {
    return (
      <div>
          <h1>Hello Comments</h1>
          <Link to='/submission'>Next Page</Link>
      </div>
    );
  }
}

export default connect()(Comments);