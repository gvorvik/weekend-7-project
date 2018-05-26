import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




class Support extends Component {

  handleSupportRating = (event) => {
    let action = { type: "SUPPORT_RATING", payload: event.target.value };
    this.props.dispatch(action);
  }

  render() {
    return (
      <div>
        <h1>Hello Support</h1>
        <select onChange={this.handleSupportRating} defaultValue="" name="supportRatings">
          <option disabled value=""> -- select an option -- </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <Link to='/comments'>Next Page</Link>
      </div>
    );
  }
}

export default connect()(Support);