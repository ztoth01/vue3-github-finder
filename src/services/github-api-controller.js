import axios from 'axios'

const URL_PARAMS = `client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`

const apiClientControllerInstance = axios.create({
  baseURL: process.env.VUE_APP_GITHUB_BASE_URL
})

apiClientControllerInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response && error.response.data && error.response.data.error) {
      return Promise.resolve({
        data: undefined,
        error: error.response.data.error
      })
    }
    return Promise.resolve({ data: undefined, error })
  }
)

export default {
  searchUser: async (searchText) => {
    return await axios.get(
      `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`
    )
    // return await apiClientControllerInstance.get(
    //   `users?q=${searchText}&${URL_PARAMS}`
    // )
  },

  getUser: async (userName) => {
    return await apiClientControllerInstance.get(
      `users/${userName}?${URL_PARAMS}`
    )
  },

  getUserRepos: async (userName) => {
    return await apiClientControllerInstance.get(
      `users/${userName}/repos?per_page=5&sort=created:asc&${URL_PARAMS}`
    )
  }
}
