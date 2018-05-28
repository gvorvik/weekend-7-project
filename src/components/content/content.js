import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';


class Content extends Component {

  handleContentUnderstandingRating = (event) => {
    let action = { type: "CONTENT_UNDERSTANDING_RATING", payload: event.target.value };
    this.props.dispatch(action);
  }

  render() {
    return (
      <div>
        <Card style={{ width: "50%", minWidth: "300px", margin: "0 auto" }}>
          <CardContent>
            <Typography variant="headline" component="h1" color="primary">
              How well are you understanding today's new content?
            </Typography>
            <select onChange={this.handleContentUnderstandingRating} defaultValue="" name="contentRatings">
              <option disabled value=""> -- select an option -- </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </CardContent>
          <CardActions style={{ float: "right" }}>
            <Link to='/support'>Next Page</Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default connect()(Content);