import axios from 'udemy-nodejs/node-express-course-main/06.5-jobster-api/final/client/src/utils/axios'
import { clearStore } from '../features/user/userSlice'
import { getUserFromLocalStorage } from './localStorage'

const customFetch = axios.create({
  baseURL: '/api/v1',
})

customFetch.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage()
  if (user) {
    config.headers['Authorization'] = `Bearer ${user.token}`
  }
  return config
})

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore())
    return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
  }
  return thunkAPI.rejectWithValue(error.response.data.msg)
}

export default customFetch
