import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapReduxStateToProps = (reduxState) => (
  { reduxState }
);

class Submission extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
    };
  }

  handleClick = () => {
    this.setState({
      submitted: !this.state.submitted,
    })
  };

  render() {
    return (
      <div>
        <h1>Thank you for the feedback!</h1>
        <h3>Your Feedback Submission Overview</h3>
        <p>How you are feeling today: {this.props.reduxState.studentReviewReducer.feelingRating}/5</p>
        <p>How well you understand today's content: {this.props.reduxState.studentReviewReducer.contentUnderstandingRating}/5</p>
        <p>How supported you feel from staff: {this.props.reduxState.studentReviewReducer.supportRating}/5</p>
        <p>Other comments: {this.props.reduxState.studentReviewReducer.feedbackComment}</p>


        {this.state.submitted ? <Link to='/' onClick={this.handleClick}>New Feedback</Link>:
          <button onClick={this.handleClick}>Submit Feedback</button>}
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Submission);