import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';



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
    let action = {type: 'SUBMIT_COMMENT', payload: this.state.comment};
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
          <h1>Please leave any comments below</h1>
          <textarea onChange={this.handleCommentInput} rows="5" cols="20"></textarea>
          <br/>
          {this.state.submitted ? <Link onClick={this.handleToggleClick} to='/submission'>Next Page</Link>:
          <Button variant="raised" color="primary" onClick={this.sendComment}>Submit Comment</Button>}
    
      </div>
    );
  }
}

export default connect()(Comments);