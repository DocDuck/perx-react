import React, { useState, useEffect } from 'react';
import { getGithubUserOrgs } from '../../models'
import Table from '../table/Table';

const UserOrgs = () => {
  const [hasError, setErrors] = useState(false);
  const [userOrgs, setUserOrgs] = useState([]);

  const columns = [{
    Header: 'User Repositories',
    columns: [
      {
        Header: 'Repo Name',
        accessor: 'repoName'
      },
      {
        Header: 'Is private',
        accessor: 'isPrivate'
      }
    ]
  }]
  
  const tableOrgsAdapter = (val = {}) => {
    return {
      repoName: val.hasOwnProperty('name') ? val.name : 'no data...',
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
      {userOrgs.lenght || true ?
       <Table data={userOrgs.map(item => tableOrgsAdapter(item))} columns={columns}/> :
       'there are no organizations...'
      }
    </div>
  );
}

export default UserOrgs