<template>
  <Panel title="Create Song">
    <label for="title">Title </label><v-text-field type="text" id="title" v-model="song.title" :rules="[required]" placeholder="title"/>
    <label for="artist">Artist </label><v-text-field type="text" id="artist" v-model="song.artist" :rules="[required]" placeholder="artist"/>
    <!-- <label for="genre">Genre </label><v-text-field type="text" id="genre" v-model="song.genre" :rules="[required]" placeholder="genre"/> -->
    <label for="album">Album </label><v-text-field type="text" id="album" v-model="song.album" :rules="[required]" placeholder="album"/>
    <v-flex xs12 sm6 d-flex>
        <v-select
          :items="optionGenres"
          label="Select"
          solo
          v-model="song.genre"
        ></v-select>
        <select multiple v-model="song.cover">
        <option>Debugging</option>
        <option>Fixing Errors</option>
        <option>User support</option>
      </select>
    </v-flex>
    <!-- <select v-model="song.genre">
      <option v-for="genre in optionGenres" v-bind:key="genre.value" v-bind:value="genre.value">
      {{genre.text}}
      </option>
    </select> -->
    <label class="checkbox">
     <input type="checkbox" v-model="song.youtube">
      I agree to the youtube<a href="#">terms and conditions</a>
    </label>
    <label class="checkbox">
      <input type="checkbox" v-model="song.concepts" value="promises">
      Promises
    </label>
    <label class="checkbox">
      <input type="checkbox" v-model="song.concepts" value="testing">
      Testing
    </label>
    <label class="radio">
      <input v-model="song.play" type="radio" value="Yeap!">
      Yeap!
    </label>
    <v-btn type="button" id="button" @click="addSong">Add Song</v-btn>
    <label for="songCreateMessage" v-show="songCreateMessage">{{songCreateMessage}}</label>
    <div style="color:red" v-html="error"/>
  </Panel>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  name: 'CreateSong',
  components: {Panel},
  data () {
    return {
      song: {
        title: '',
        album: '',
        artist: '',
        genre: 'M',
        cover: [],
        youtube: false,
        concepts: [],
        play: ''
      },
      optionGenres: [
        {text: 'Rock', value: 'R'},
        {text: 'HipHop', value: 'H'},
        {text: 'Metal', value: 'M'}
      ],
      defaultValue: 'M',
      error: null,
      songCreateMessage: '',
      required: (value) => !!value || 'Required'
    }
  },
  methods: {
    async addSong () {
      try {
        this.error = null
        const response = await SongsService.addSong(this.song)
        this.songCreateMessage = response.data.message
        // console.log(this.song)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style>

</style>
