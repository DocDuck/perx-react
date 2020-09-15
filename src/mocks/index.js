export const getGithubUser = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({name}), 1000)
    })
}