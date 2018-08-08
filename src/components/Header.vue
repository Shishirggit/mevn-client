<template><div>
  <LeftNav :drawer="drawer" />
  <v-toolbar flat dense class="deep-purple darken-4" dark fixed app>
    <v-toolbar-side-icon @click="drawer= !drawer"></v-toolbar-side-icon>
    <v-toolbar-title><v-list-tile to="hello" flat dark>Mevn App</v-list-tile></v-toolbar-title>
    <v-toolbar-items>
    <v-list-tile to="songs" flat dark>Songs</v-list-tile>
    <v-list-tile to="createsong" flat dark>Create Song</v-list-tile>
    <v-list-tile to="stock" flat dark>View Stock</v-list-tile>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
    <v-list-tile to="login" flat dark v-if="!getUserLoggedIn">Login</v-list-tile>
    <v-list-tile to="register" flat dark v-if="!getUserLoggedIn">Sign Up</v-list-tile>
    <v-list-tile to="logout" flat dark v-if="getUserLoggedIn">Logout</v-list-tile>
    </v-toolbar-items>
  </v-toolbar>
</div>
</template>

<script>
import LeftNav from '@/components/LeftNav'
export default {
  name: 'Header',
  components: {LeftNav},
  data () {
    return {
      isUserLoggedIn: false,
      drawer: false
    }
  },
  computed: {
    getUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    }
  }
}
</script>

<style>

</style>
