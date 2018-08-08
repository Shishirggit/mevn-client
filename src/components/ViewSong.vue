<template>
  <Panel title="View Song">
    <Song :song="song" :action="action"/>
  </Panel>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import Song from '@/components/Song'

export default {
  name: 'ViewSong',
  components: {Panel, Song},
  data () {
    return {
      song: {},
      action: 'EditSong'
    }
  },
  async mounted () {
    try {
      this.song = await SongsService.viewSong(this.$route.params.song).then(response => response.data.song)
    } catch (err) {
      this.error = err.response.data.error
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
