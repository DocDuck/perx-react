import { Paper } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux'
import Table from '../table/Table';

const UserOrgs = ({ userOrgs }) => {

  const columns = [{
    Header: 'User Organizations',
    columns: [
      {
        Header: 'Org Name',
        accessor: 'orgName'
      },
      {
        Header: 'Is private',
        accessor: 'isPrivate'
      }
    ]
  }]
  
  const tableOrgsAdapter = (val = {}) => {
    return {
      orgName: val.hasOwnProperty('name') ? val.name : 'no data...',
      isPrivate: val.hasOwnProperty('private') ? val.private : 'no data...',
    }
  }
 
  return (
    <div>
      {Array.isArray(userOrgs) && userOrgs.lenght > 0 ?
       <Table data={userOrgs.map(item => tableOrgsAdapter(item))} columns={columns}/> :
       <Paper className="empty">there are no organizations...</Paper>
      }
    </div>
  );
}

const mapStateToProps = ({ userOrgs }) => ({ userOrgs })

export default connect(mapStateToProps)(UserOrgs)