
import axiosDefaults from 'axios/lib/defaults';

// fetch('https://api.themoviedb.org/3/discover/movie?api_key=a921daaa362d226c6d7e155569126f26&page=1')

const API_SERVER_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'a921daaa362d226c6d7e155569126f26'

axiosDefaults.baseURL = `${API_SERVER_URL}`

axiosDefaults.params = {
  api_key: API_KEY,
}

axiosDefaults.headers = {
  'Content-Type': 'application/json',
}
