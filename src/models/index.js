export const getGithubUser = (userName) => fetch(`http://api.github.com/users/${userName}`).then(res => res.json()).then(data => data)
export const getGithubUserOrgs = (userName) => fetch(`http://api.github.com/users/${userName}/orgs`).then(res => res.json()).then(data => data)
export const getGithubUserRepos = (userName) => fetch(`http://api.github.com/users/${userName}/repos`).then(res => res.json()).then(data => data)

export const getGithubTest = () => fetch('http://api.github.com/zen')