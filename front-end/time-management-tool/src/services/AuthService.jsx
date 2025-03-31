import axios from 'axios'

const API_BASE = 'http://localhost:8080/api/auth'

const AuthService = {
  login: async (username, password) => {
    const response = await axios.post(`${API_BASE}/login`, {
      username,
      password
    })
    return response.data
  },

  register: async (username, password) => {
    const response = await axios.post(`${API_BASE}/register`, {
      username,
      password
    })
    return response.data
  }
}

export default AuthService
