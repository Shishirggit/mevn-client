<template>
  <v-card class="mt-4">
    <v-card-media
      src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
      height="100px"
    ></v-card-media>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{song.title}}</h3>
        <div>{{song.artist}} <br>{{song.genre}} <br/> {{song.album}}</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn color="deep-purple darken-4" dark type="button" id="button" @click="navigateTo(action,song)">{{action}}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>

export default {
  name: 'Song',
  data () {
    return {
    }
  },
  props: ['song', 'action'],
  methods: {
    navigateTo (name, song) {
      this.$router.push({name: name, params: {song: song}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
