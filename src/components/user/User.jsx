import React, { useState, useEffect } from 'react';
import { getGithubUser } from '../../mocks'

 
const User = () => {
  const [hasError, setErrors] = useState(false);
  const [user, setUser] = useState({});
 
  useEffect(() => {
    async function fetchData() {
        const result = await getGithubUser('DocDuck');
        setUser({user: result})
    }
    fetchData();
  }, []);
 
  return (
    <div>
      {JSON.stringify(user)}
    </div>
  );
}

export default User