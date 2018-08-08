<template>
<v-layout>
    <v-flex xs12 sm6 offset-sm3>
        <div class="white elevation-2">
        <v-toolbar flat dense class="deep-purple darken-4" dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <v-spacer />
            <slot name="addSong" />
        </v-toolbar>
        </div>
        <div class="pl-4 pr-4 pt-2 pb-2">
        <slot>

        </slot>
        </div>
    </v-flex>
</v-layout>
</template>

<script>

export default {
  name: 'Panel',
  props: ['title'],
  data () {
    return {
      // title: 'Hello World'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
