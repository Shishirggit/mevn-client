import axios from 'axios'

function getEnvBaseURL () {
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'production') {
    return 'https://mevn-server.herokuapp.com/'
  } else {
    return 'http://localhost:3000/'
  }
}

export default () => {
  return axios.create({
    baseURL: getEnvBaseURL()
  })
}
