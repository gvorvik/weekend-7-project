import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';




class Comments extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };
  }

  handleCommentInput = (event) => {
    this.setState({
      comment: event.target.value
    });
  }

  sendFeedback = () => {
    if (this.state.comment === '') {
      return alert('Please comment on your day\'s experience!');
    }
    let action = {type: 'SUBMIT_FEEDBACK', payload: this.state.comment};
    this.props.dispatch(action);
    console.log(this.state.comment);
  };

  render() {
    return (
      <div>
          <h1>Please leave any comments below</h1>
          <input onChange={this.handleCommentInput} type="text"/>
          <button onClick={this.sendFeedback}>Submit Feedback</button>
          <br/>
          <Link to='/submission'>Next Page</Link>
      </div>
    );
  }
}

export default connect()(Comments);