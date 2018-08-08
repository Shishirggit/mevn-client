import Api from '@/services/Api'

export default {
  register (credenitals) {
    return Api().post('register', credenitals)
  },
  login (credenitals) {
    /* return Api().post('login', {
      params: {
        email: credenitals.email
      }
    }) */
    return Api().post('login', credenitals)
  }
}
