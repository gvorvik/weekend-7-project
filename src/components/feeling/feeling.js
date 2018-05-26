import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




class Feeling extends Component {

    handleFeelingRating = (event) => {
        let action = {type: "FEELING_RATING", payload: event.target.value};
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <select onChange={this.handleFeelingRating} name="feelingRatings">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <Link to='/content'>Next Page</Link>
            </div>
        );
    }
}

export default connect()(Feeling);