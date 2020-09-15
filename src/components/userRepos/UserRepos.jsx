import React, { useState, useEffect } from 'react';
import { getGithubUserRepos } from '../../models'

 
const UserRepos = () => {
  const [hasError, setErrors] = useState(false);
  const [userRepos, setUserRepos] = useState([]);
 
  useEffect(() => {
    async function fetchData() {
        const result = await getGithubUserRepos('DocDuck');
        console.log(result.map(it => it.name))
        setUserRepos([].concat(result))
    }
    fetchData();
  }, []);
 
  return (
    <ul>
      {userRepos.length && userRepos.map(it => <li>{it.name}</li>)}
    </ul>
  );
}

export default UserRepos