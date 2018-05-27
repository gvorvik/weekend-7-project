import React, { Component } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import AdminRow from './adminRow/adminRow';

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

        let tableRows = this.state.feedback.map((element) => {
            return <AdminRow
                key={element.id}
                id={element.id}
                feeling={element.feeling}
                understanding={element.understanding}
                support={element.support}
                comments={element.comments}
            />
        });

        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell numeric>Review Number</TableCell>
                            <TableCell numeric>Feeling</TableCell>
                            <TableCell numeric>Content Understanding</TableCell>
                            <TableCell numeric>Staff Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableRows}
                    </TableBody>
                </Table>
            </Paper>

            // <div>
            //     <table>
            //         <thead>
            //             <tr>
            //                 <th>ID</th>
            //                 <th>Feeling</th>
            //                 <th>Content Understanding</th>
            //                 <th>Staff Support</th>
            //                 <th>Comments</th>
            //             </tr>
            //         </thead>
            //         <tbody>
            //             {tableRows}
            //         </tbody>
            //     </table>
            // </div>
        );
    }
}

export default AdminTable;