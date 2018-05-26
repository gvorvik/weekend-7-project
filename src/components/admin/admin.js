import React, { Component } from 'react';

import AdminTable from './adminTable/adminTable';

class Admin extends Component {

  render() {
    return (
      <div>
        <h1>Hello Admin Page</h1>
        <AdminTable />
      </div>
    );
  }
}

export default Admin;