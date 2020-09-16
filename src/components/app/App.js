import React from 'react';
import './App.css';
// components
import User from '../user/User'
import UserOrgs from '../userOrgs/UserOrgs.jsx'
import UserRepos from '../userRepos/UserRepos.jsx'
import UserInput from '../userInput/UserInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserInput/>
        <div className="flex w100">
          <UserOrgs/>
          <UserRepos/>
        </div>
      </header>
    </div>
  );
}

export default App;