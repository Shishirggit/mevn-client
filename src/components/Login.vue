<template>
  <Panel title="Login">
    <label for="email">Email </label><v-text-field type="text" id="email" v-model="email" placeholder="Email"/>
    <label for="email">password </label><v-text-field type="password" id="password" v-model="password" placeholder="Password"/>
    <v-btn type="button" id="button" @click="login()">Login user</v-btn>
    <div style="color:red" v-html="error"/>
  </Panel>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  name: 'Login',
  components: {Panel},
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        this.error = null
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setUser', response.data.user)
        this.$store.dispatch('setToken', response.data.token)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style>

</style>
