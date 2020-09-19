import { ACTION_TYPE } from '../constants'

const initState = {
    userName: '',
    userOrgs: [],
    isUserOrgsFetching: false,
    isUserOrgsFetched: false,
    userRepos: [],
    isUserReposFetching: false,
    isUserReposFetched: false, 
    userNameError: null,
    userOrgsError: null,
    userReposError: null 
}

const reducer = (state = initState, action) => {

    // console.log(action)

    switch (action.type) {
        case ACTION_TYPE.SET_USER_NAME:
            return {...state, userName: action.payload}
        case ACTION_TYPE.SET_USER_ORGS:
            return {...state, userOrgs: action.payload}
        case ACTION_TYPE.SET_USER_ORGS_FETCHING:
            return {...state, isUserOrgsFetching: action.payload}
        case ACTION_TYPE.SET_USER_ORGS_FETCHED:
            return {...state, isUserOrgsFetched: action.payload}        
        case ACTION_TYPE.SET_USER_REPOS:
            return {...state, userRepos: action.payload}
        case ACTION_TYPE.SET_USER_REPOS_FETCHING:
            return {...state, isUserReposFetching: action.payload}
        case ACTION_TYPE.SET_USER_REPOS_FETCHED:
            return {...state, isUserReposFetched: action.payload}
        case ACTION_TYPE.SET_USER_NAME_ERROR:
            return {...state, userNameError: action.payload}
        case ACTION_TYPE.SET_USER_ORGS_ERROR:
            return {...state, userOrgsError: action.payload}
        case ACTION_TYPE.SET_USER_REPOS_ERROR:
            return {...state, userReposError: action.payload}
        case ACTION_TYPE.CLEAR_CURRENT_USER_DATA:
            return {...state, userRepos: [], userOrgs: [], isUserReposFetched: false, isUserOrgsFetched: false}    
        default:
            return state
    }
}

export default reducer