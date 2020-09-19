import { ACTION_TYPE } from '../constants'
import * as API from '../models'

export const setUserName = (payload) => ({ type: ACTION_TYPE.SET_USER_NAME, payload })
export const setUserOrgs = (payload) => ({ type: ACTION_TYPE.SET_USER_ORGS, payload })
export const setUserOrgsFetching = (payload) => ({ type: ACTION_TYPE.SET_USER_ORGS_FETCHING, payload })
export const setUserOrgsFetched = (payload) => ({ type: ACTION_TYPE.SET_USER_ORGS_FETCHED, payload })
export const setUserRepos = (payload) => ({ type: ACTION_TYPE.SET_USER_REPOS, payload })
export const setUserReposFetching = (payload) => ({ type: ACTION_TYPE.SET_USER_REPOS_FETCHING, payload })
export const setUserReposFetched = (payload) => ({ type: ACTION_TYPE.SET_USER_REPOS_FETCHED, payload })
export const setUserNameError = (payload) => ({ type: ACTION_TYPE.SET_USER_NAME_ERROR, payload })
export const setUserOrgsError = (payload) => ({ type: ACTION_TYPE.SET_USER_ORGS_ERROR, payload })
export const setUserReposError = (payload) => ({ type: ACTION_TYPE.SET_USER_REPOS_ERROR, payload })
export const clearCurrentUserData = () => ({ type: ACTION_TYPE.CLEAR_CURRENT_USER_DATA })

// action creators
export const getCurrentUserRepos = () => async (dispatch, getState) => {
    const { userName } = getState()
    dispatch(setUserReposFetching(true))
    try {
        const result = await API.getGithubUserRepos(userName)
        dispatch(setUserRepos(result))
        dispatch(setUserReposFetched(true))
    } catch (e) {
        dispatch(setUserReposFetched(false))
        dispatch(setUserReposError(e))
    } finally {
        dispatch(setUserReposFetching(false))
    }
}

export const getCurrentUserOrgs = () => async (dispatch, getState) => {
    const { userName } = getState()
    dispatch(setUserOrgsFetching(true))
    try {
        const result = await API.getGithubUserOrgs(userName)
        dispatch(setUserOrgs(result))
        dispatch(setUserOrgsFetched(true))
    } catch (e) {
        dispatch(setUserOrgsFetched(false))
        dispatch(setUserOrgsError(e))
    } finally {
        dispatch(setUserOrgsFetching(false))
    }
}

export const getCurrentUserData = (dispatch) => {
    dispatch(getCurrentUserOrgs())
    dispatch(getCurrentUserRepos())
}