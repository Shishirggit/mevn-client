<template>
  <Panel title="Songs">
  <v-btn slot="addSong" light  small fab>
    <router-link to="createsong"><v-icon>add</v-icon></router-link>
  </v-btn>
  <Song v-for="song in songs" :song="song" :action="action" v-bind:key="song._id"/>
  </Panel>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import Song from '@/components/Song'

export default {
  name: 'Songs',
  components: {Panel, Song},
  data () {
    return {
      songs: null,
      action: 'ViewSong'
    }
  },
  async mounted () {
    this.songs = await SongsService.getSongs().then(response => response.data.songs)
  }
}
</script>

<style>

</style>
