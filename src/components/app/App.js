import React from 'react';
import { connect } from 'react-redux'
import './App.css';
// components
import UserOrgs from '../userOrgs/UserOrgs.jsx'
import UserRepos from '../userRepos/UserRepos.jsx'
import UserInput from '../userInput/UserInput';

function App({isUserOrgsFetched, isUserReposFetched}) {
  return (
    <div className="App">
      <header className="App-header">
        <UserInput/>
        <div className="flex w100">
          {isUserOrgsFetched && <UserOrgs/>}
          {isUserReposFetched && <UserRepos/>}
        </div>
      </header>
    </div>
  );
}

const mapStateToProps = ({isUserOrgsFetched, isUserReposFetched}) => ({isUserOrgsFetched, isUserReposFetched})

export default connect(mapStateToProps)(App);