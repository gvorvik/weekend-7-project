import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




class Content extends Component {

  handleContentUnderstandingRating = (event) => {
    let action = { type: "CONTENT_UNDERSTANDING_RATING", payload: event.target.value };
    this.props.dispatch(action);
  }

  render() {
    return (
      <div>
        <h1>How well are you understanding today's new content?</h1>
        <select onChange={this.handleContentUnderstandingRating} name="contentRatings">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <Link to='/support'>Next Page</Link>
      </div>
    );
  }
}

export default connect()(Content);