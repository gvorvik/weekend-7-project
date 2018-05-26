import React, { Component } from 'react';

class AdminTable extends Component {

    render() {
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
                        <tr>
                            <td>1</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>Everything went really well!</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AdminTable;