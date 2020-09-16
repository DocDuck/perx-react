import React, { useState, useEffect } from 'react';
import { getGithubUserRepos } from '../../models'
import Table from '../table/Table';
 
const UserRepos = () => {
  const [hasError, setErrors] = useState(false);
  const [userRepos, setUserRepos] = useState([]);

  const columns = [{
    Header: 'User Repositories',
    columns: [
      {
        Header: 'Repo Name',
        accessor: 'repoName',
        sortType: 'basic'
      },
      {
        Header: 'Is private',
        accessor: 'isPrivate',
        sortType: 'basic'
      }
    ]
  }]

  const tableReposAdapter = (val = {}) => {
    return {
      repoName: val.hasOwnProperty('name') ? val.name : 'no data...',
      isPrivate: val.hasOwnProperty('private') ? val.private.toString() : 'no data...',
    }
  }
 
  useEffect(() => {
    async function fetchData() {
        const result = await getGithubUserRepos('DocDuck');
        setUserRepos([].concat(result))
    }
    fetchData();
  }, []);
 
  return (
    <div>
      {Array.isArray(userRepos) && userRepos.length > 0 ?
       <Table data={userRepos.map(item => tableReposAdapter(item))} columns={columns}/> :
       'there are no repositories...'
      }
    </div>
  );
}

export default UserRepos