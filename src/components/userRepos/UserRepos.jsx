import { Paper } from '@material-ui/core';
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
        Header: 'Repo Description',
        accessor: 'repoDesc'
      },
      {
        Header: 'Language',
        accessor: 'language'
      },
      {
        Header: 'Is private',
        accessor: 'isPrivate'
      }
    ]
  }]

  const tableReposAdapter = (val = {}) => {
    return {
      repoName: val.hasOwnProperty('name') && val.name ? val.name : 'no data...',
      repoDesc: val.hasOwnProperty('description') && !!val.description ? val.description.toString() : 'no data...',
      language: val.hasOwnProperty('language') && !!val.language ? val.language : 'no data...',
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
      <Table
        data={userRepos.map(item => tableReposAdapter(item))}
        columns={columns}
        defaultPageSize={20}
        style={{
          height: "400px"
        }}
        
      /> :
      <Paper>'there are no repositories...'</Paper>
      }
    </div>
  );
}

export default UserRepos