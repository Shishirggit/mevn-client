<template>
  <Panel title="Edit Song">
    <label for="title">Title </label><v-text-field type="text" id="title" v-model="song.title" :rules="[required]" placeholder="title"/>
    <label for="artist">Artist </label><v-text-field type="text" id="artist" v-model="song.artist" :rules="[required]" placeholder="artist"/>
    <label for="genre">Genre </label><v-text-field type="text" id="genre" v-model="song.genre" :rules="[required]" placeholder="genre"/>
    <label for="album">Album </label><v-text-field type="text" id="album" v-model="song.album" :rules="[required]" placeholder="album"/>
    <v-btn color="deep-purple darken-4" dark type="button" id="button" @click="save">Save</v-btn>
    <label for="songEditMessage" v-show="songEditMessage">{{songEditMessage}}</label>
    <div style="color:red" v-html="error"/>
  </Panel>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  name: 'EditSong',
  components: {Panel},
  data () {
    return {
      song: {
        title: '',
        album: '',
        artist: '',
        genre: ''
      },
      error: null,
      songEditMessage: '',
      required: (value) => !!value || 'Required'
    }
  },
  mounted () {
    this.song = this.$route.params.song
  },
  methods: {
    async save () {
      try {
        this.error = null
        const response = await SongsService.editSong(this.song)
        this.songEditMessage = response.data.message
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style>

</style>
