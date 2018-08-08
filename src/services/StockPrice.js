import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: '',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
