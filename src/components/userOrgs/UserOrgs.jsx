import React, { useState, useEffect } from 'react';
import { getGithubUserOrgs } from '../../models'

 
const UserOrgs = () => {
  const [hasError, setErrors] = useState(false);
  const [userOrgs, setUserOrgs] = useState({});
 
  useEffect(() => {
    async function fetchData() {
        const result = await getGithubUserOrgs('DocDuck');
        setUserOrgs({userOrgs: result})
    }
    fetchData();
  }, []);
 
  return (
    <div>
      {JSON.stringify(userOrgs)}
      {userOrgs.lenght ? userOrgs.map(org => <li>org.name</li>) : 'there are no organizations...'}
    </div>
  );
}

export default UserOrgs