import React, { Component } from 'react';
import axios from 'axios';

class AdminTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            feedback: [],
        };
    }

    getFeedbackData = () => {
        console.log('get feedback data ran');
        axios({
            method: 'GET',
            url: '/feedback'
        })
        .then((response) => {
            this.setState({
                feedback: response.data
            });
            console.log(this.state.feedback);
        })
        .catch((error) => {
            console.log('error with axios get', error);
        })
    }

    componentDidMount() {
        this.getFeedbackData();
    };

    render() {

        let tableRows = this.state.feedback.map((feedback) => {
            return <tr key={feedback.id}><td>{feedback.id}</td><td>{feedback.feeling}</td><td>{feedback.understanding}</td>
            <td>{feedback.support}</td><td>{feedback.comments}</td></tr>;
        })

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Feeling</th>
                            <th>Content Understanding</th>
                            <th>Staff Support</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AdminTable;