import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class Support extends Component {

  constructor(props) {
    super(props);

    this.state = {
      support: ''
    };

  }

  handleSupportRating = (support) => {
    this.setState({
      support: support.value
    });
  }

  handleSubmit = () => {
    let action = { type: "SUPPORT_RATING", payload: this.state.support};
    this.props.dispatch(action);
  }

  render() {

    const { support } = this.state;

    return (
      <div>
        <Card style={{ width: "50%", minWidth: "300px", margin: "0 auto" }}>
          <CardContent style={{ height: "250px" }}>
            <Typography variant="headline" component="h1" color="primary">
              How well did staff support you today?
            </Typography>
            <Select
              name="content-rating"
              value={support}
              onChange={this.handleSupportRating}
              style={{ marginTop: "20px" }}
              options={[
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4', label: '4' },
                { value: '5', label: '5' },
              ]} />



            {/* <select onChange={this.handleSupportRating} defaultValue="" name="supportRatings">
              <option disabled value=""> -- select an option -- </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select> */}

          </CardContent>
          <CardActions style={{ float: "right" }}>
            <Link onClick={this.handleSubmit} to='/comments'>Next Page</Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default connect()(Support);