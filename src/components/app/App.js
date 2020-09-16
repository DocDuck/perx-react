import React from 'react';
import './App.css';
// components
import User from '../user/User'
import UserOrgs from '../userOrgs/UserOrgs.jsx'
import UserRepos from '../userRepos/UserRepos.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Perx is awesome!
        <div className="flex">
          <UserOrgs/>
          <UserRepos/>
        </div>
      </header>
    </div>
  );
}

export default App;