import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';


class Feeling extends Component {
    constructor(props) {
        super(props)

        this.state = {
            feeling: ''
        }
    }

    handleFeelingRating = (event) => {
        let action = { type: "FEELING_RATING", payload: event.target.value };
        this.props.dispatch(action);
    }

    render() {

        return (
            <div>
                <Card style={{width: "50%", minWidth: "300px", margin: "0 auto" }}>
                    <CardContent>
                        <Typography variant="headline" component="h1" color="primary">
                           How are you feeling today?
                        </Typography>
                        <select onChange={this.handleFeelingRating} defaultValue="" name="feelingRatings">
                            <option disabled value=""> -- select an option -- </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </CardContent>
                    <CardActions style={{float: "right"}}>
                        <Link to='/content'>Next Page</Link>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default connect()(Feeling);