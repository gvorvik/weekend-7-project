import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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

  handleFeedbackSubmission = () => {
    axios({
      method: 'POST',
      url: '/feedback',
      data: this.props.reduxState.studentReviewReducer
    })
    .then((response) => {
      console.log('response from server', response);
    })
    .catch((error) => {
      console.log('error on axios post',error);
    });

    this.setState({
      submitted: !this.state.submitted,
    });

  }

  startNewFeedback = () => {
    let action = {type: 'CLEAR_FEEDBACK'};
    this.props.dispatch(action);
    this.setState({
      submitted: !this.state.submitted,
    });
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


        {this.state.submitted ? <Link to='/' onClick={this.startNewFeedback}>New Feedback</Link> :
          <Button variant="raised" color="primary" onClick={this.handleFeedbackSubmission}>Submit Feedback</Button>}
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Submission);