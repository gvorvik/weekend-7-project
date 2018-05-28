import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class Feeling extends Component {
    constructor(props) {
        super(props)

        this.state = {
            feeling: '',
        }
    }

    handleFeelingRating = (feeling) => {
        this.setState({
            feeling: feeling.value
        });
    }
    
    submitFeeling = () => {
        let action = { type: "FEELING_RATING", payload: this.state.feeling };
        this.props.dispatch(action);
    }

    render() {

        const { feeling } = this.state;

        return (
            <div>
                <Card style={{ width: "50%", minWidth: "300px", margin: "0 auto" }}>
                    <CardContent style={{height: "250px"}}>
                        <Typography variant="headline" component="h1" color="primary">
                            How are you feeling today?
                        </Typography>
                        <Select
                            name="feeling-rating"
                            value={feeling}
                            onChange={this.handleFeelingRating}
                            style={{marginTop: "20px"}}
                            options={[
                                { value: '1', label: '1' },
                                { value: '2', label: '2' },
                                { value: '3', label: '3' },
                                { value: '4', label: '4' },
                                { value: '5', label: '5' },
                            ]} />
                    </CardContent>
                    <CardActions style={{ float: "right" }}>
                        <Link onClick={this.submitFeeling} to='/content'>Next Page</Link>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default connect()(Feeling);