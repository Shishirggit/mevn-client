import Api from '@/services/Api'

export default {
  addSong (song) {
    return Api().post('addSong', song)
  },
  editSong (song) {
    return Api().put('editSong', song)
  },
  getSongs () {
    return Api().get('getSongs')
  },
  viewSong (song) {
    return Api().get('viewSong', {
      params: {
        _id: song._id
      }
    })
  }
}
