import React, { Component } from 'react';

import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

class AdminRow extends Component {

    handleDeleteFeedback = (id) => {
        console.log('Delete Button Ran!', id);
        axios({
          method: 'DELETE',
          url: `/feedback/${id}`
        })
        .then((result) => {
          console.log(result);
          this.props.getFeedbackData();
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
  render() {
    return (
            <TableRow key={this.props.id}><TableCell>{this.props.id}</TableCell><TableCell>{this.props.feeling}</TableCell><TableCell>{this.props.understanding}</TableCell>
            <TableCell>{this.props.support}</TableCell><TableCell>{this.props.comments}</TableCell>
            <TableCell><Button onClick={() => this.handleDeleteFeedback(this.props.id)} variant="raised" color="secondary">Delete Feedback</Button></TableCell></TableRow>
    );
  }
}

export default AdminRow;