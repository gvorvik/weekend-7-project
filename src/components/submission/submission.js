import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

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
        console.log('error on axios post', error);
      });

    this.setState({
      submitted: !this.state.submitted,
    });

  }

  startNewFeedback = () => {
    let action = { type: 'CLEAR_FEEDBACK' };
    this.props.dispatch(action);
    this.setState({
      submitted: !this.state.submitted,
    });
  };

  render() {
    return (
      <div>
        <Card style={{ width: "50%", minWidth: "300px", margin: "0 auto" }}>
          <CardContent>
            <Typography variant="headline" component="h1" color="primary">
              Thank you for your feedback!
            </Typography>
            <Typography component="p">
              How you are feeling today: {this.props.reduxState.studentReviewReducer.feelingRating}/5
            </Typography>
            <Typography component="p">
              How well you understand today's content: {this.props.reduxState.studentReviewReducer.contentUnderstandingRating}/5
            </Typography>
            <Typography component="p">
              How supported you feel from staff: {this.props.reduxState.studentReviewReducer.supportRating}/5
            </Typography>
            <Typography component="p">
              Other comments: {this.props.reduxState.studentReviewReducer.feedbackComment}
            </Typography>
          </CardContent>
          <CardActions style={{ float: "right" }}>
            {this.state.submitted ? <Link to='/' onClick={this.startNewFeedback}>New Feedback</Link> :
              <Button variant="raised" color="primary" onClick={this.handleFeedbackSubmission}>Submit Feedback</Button>}
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Submission);