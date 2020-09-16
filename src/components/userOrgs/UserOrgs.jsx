import { Paper } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { getGithubUserOrgs } from '../../models'
import Table from '../table/Table';

const UserOrgs = () => {
  const [hasError, setErrors] = useState(false);
  const [userOrgs, setUserOrgs] = useState([]);

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
 
  useEffect(() => {
    async function fetchData() {
        const result = await getGithubUserOrgs('DocDuck');
        setUserOrgs([].concat(result))
    }
    fetchData();
  }, []);
 
  return (
    <div>
      {Array.isArray(userOrgs) && userOrgs.lenght > 0 ?
       <Table data={userOrgs.map(item => tableOrgsAdapter(item))} columns={columns}/> :
       <Paper className="empty">there are no organizations...</Paper>
      }
    </div>
  );
}

export default UserOrgs