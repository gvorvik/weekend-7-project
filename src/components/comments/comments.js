import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';



class Comments extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      submitted: false,
    };
  }

  handleCommentInput = (event) => {
    this.setState({
      comment: event.target.value
    });
  }

  sendComment = () => {
    if (this.state.comment === '') {
      return alert('Please comment on your day\'s experience!');
    }
    let action = { type: 'SUBMIT_COMMENT', payload: this.state.comment };
    this.props.dispatch(action);
    this.handleToggleClick();
    console.log(this.state.comment);
  };

  handleToggleClick = () => {
    this.setState({
      submitted: !this.state.submitted,
    });
  }

  render() {
    return (
      <div>
        <Card style={{ width: "50%", minWidth: "300px", margin: "0 auto" }}>
          <CardContent>
            <Typography variant="headline" component="h1" color="primary">
              Please leave any comments below
            </Typography>
            <textarea onChange={this.handleCommentInput} rows="5" cols="20"></textarea>
          </CardContent>
          <CardActions style={{ float: "right" }}>
            {this.state.submitted ? <Link onClick={this.handleToggleClick} to='/submission'>Next Page</Link> :
              <Button variant="raised" color="primary" onClick={this.sendComment}>Submit Comment</Button>}
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default connect()(Comments);