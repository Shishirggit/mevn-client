<template>
  <v-navigation-drawer v-if="drawer" fixed app>
  <v-list dense>
    <v-list-tile>
        <v-list-tile-action>
        <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>
    <v-list-tile>
        <v-list-tile-action>
        <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title>Contact</v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>
  </v-list>
  </v-navigation-drawer>
</template>

<script>
export default{
  name: 'LeftNav',
  data () {
    return {
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      right: null
    }
  },
  props: ['drawer']
}
</script>

<style scoped>

</style>
